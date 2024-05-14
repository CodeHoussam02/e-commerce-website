const User = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tokenGenerator = require("../Utils/token.handler");
const httpStatus = require("../Utils/http.text");
const { validationResult } = require("express-validator");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const signUp = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(404).json({
                status: httpStatus.FAIL,
                data: {
                    error: result.array(),
                },
            });
        }
        // check if this user exists before
        const userExists = await User.find({ email: email });
        if (userExists.length > 0) {
            return res.status(404).json({
                status: httpStatus.FAIL,
                data: null,
                message: "User already exists",
            });
        }
        // password hashing
        const hashedPass = await bcrypt.hash(password, 8);
        // after hashing its time to create a new user instence
        const newUser = new User({
            fullname,
            email,
            password: hashedPass,
            role,
        });
        // generate user token
        const token = await tokenGenerator({
            email: newUser.email,
            id: newUser._id,
            role: newUser.role,
        });
        // attatch token to the user
        newUser.token = token;
        // generate actiovation code
        const activationCode = crypto.randomBytes(32).toString("hex");
        newUser.activationCode = activationCode;
        // save the new user
        await newUser.save();
        console.log("--before generating");
        // send verification
        if (!result.isEmpty()) {
            res.status(404).json({
                status: "error",
                data: result.array(),
            });
        }
        // email verification  Always use let for declearing varibles on nodemailer
        let config = {
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        };
        let transporter = nodemailer.createTransport(config);
        // response object
        console.log("three");
        let message = {
            from: "Oneclick@mail.com",
            to: email,
            subject: "Email verification",
            html: `<!DOCTYPE html>
                                <html>
                                <head>
                                    <style>
                                        body {
                                            font-family: Arial, sans-serif;
                                            background-color: #f2f2f2;
                                        }
                                
                                        .container {
                                            max-width: 600px;
                                            margin: 0 auto;
                                            padding: 20px;
                                            background-color: #fff;
                                            border-radius: 5px;
                                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                                        }
                                
                                        .header {
                                            text-align: center;
                                            margin-bottom: 20px;
                                        }
                                
                                        .header h1 {
                                            color: #333;
                                            font-size: 24px;
                                            margin: 0;
                                        }
                                
                                        .content {
                                            margin-bottom: 30px;
                                        }
                                
                                        .content p {
                                            margin: 0 0 10px;
                                            line-height: 1.5;
                                        }
                                
                                        .footer {
                                            text-align: center;
                                        }
                                
                                        .footer p {
                                            color: #999;
                                            font-size: 14px;
                                            margin: 0;
                                        }
                                    </style>
                                </head>
                                <body>
                                    <div class="container">
                                        <div class="header">
                                            <h1>Greetings, ${fullname}!</h1>
                                        </div>
                                        <div class="content">
                                            <p>Thank you for being a valued member of our community.</p>
                                            <p>We appreciate your continued support and would like to offer you a special discount on your next purchase.</p>
                                            <p>Simply click on this Link to verify your account to start your journey with us <a href=http://localhost:5173/confirm/activationcode=${activationCode}&fullname=${fullname}>Confirmation Link</a> at checkout to enjoy a 10% discount.</p>
                                            <p>We hope you enjoy your shopping experience with us.</p>
                                        </div>
                                        <div class="footer">
                                            <p>Best regards,</p>
                                            <p>The Team</p>
                                        </div>
                                    </div>
                                </body>
                                </html>`,
        };

        transporter
            .sendMail(message)
            .then((_) => {
                res.status(200).json({
                    status: httpStatus.SUCCES,
                    data: {
                        token: token,
                    },
                    message: "Mail was sent",
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    error: err,
                });
            });

        //
    } catch (err) {
        res.status(500).json({
            status: httpStatus.ERROR,
            data: null,
            message: "Internal server error",
        });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if all credentials are provided
        if (!email || !password) {
            return res.status(404).json({
                status: httpStatus.FAIL,
                data: null,
                message: "Email and password are required",
            });
        }
        // find existing user
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(404).json({
                status: httpStatus.FAIL,
                data: null,
                message: "User not found",
            });
        }
        // matching the password
        const matchingPass = await bcrypt.compare(password, user.password);
        if (!matchingPass) {
            return res.status(404).json({
                status: httpStatus.FAIL,
                data: null,
                message: "Incorrect Password",
            });
        }
        // check if user is verified
        if (!user.isActive) {
            return res.status(404).json({
                status: httpStatus.FAIL,
                data: null,
                message: "Please verify your account",
            });
        }
        // attach the token to the user cookie
        if (user && matchingPass) {
            const token = await tokenGenerator({
                email: user.email,
                id: user._id,
                role: user.role,
            });
            // sanitise the data before send it to the user
            const { password: pass, ...rest } = user._doc;
            res.cookie("access_token", token, { httpOnly: true })
                .status(200)
                .json({
                    status: httpStatus.SUCCES,
                    data: {
                        rest,
                    },
                });
        }
    } catch (err) {
        res.status(500).json({
            status: httpStatus.ERROR,
            data: null,
            message: "Internal server error",
        });
    }
};

const makeActive = async (req, res) => {
    try {
        const data = req.params.activationcode;
        const activationCode = data.split("=")[1].split("&")[0];
        // loock for this user
        const user = await User.find({ activationcode: activationCode });
        if (!user) {
            return res.status(404).json({
                status: httpStatus.FAIL,
                data: null,
                message: "activation code is unvalid",
            });
        }
        user.isActive = true;
        await user.save();
        res.status(200).json({
            status: httpStatus.SUCCES,
            data: null,
            message: "account verified",
        });
    } catch (err) {
        res.status(500).json({
            status: httpStatus.ERROR,
            data: null,
            message: "Internal server error",
        });
    }
};

const signOut = (req, res) => {
    try {
        res.clearCookie("access_token");
        res.status(200).json({
            status: httpStatus.SUCCES,
            data: null,
            message: "Logout success",
        });
    } catch (err) {
        res.status(500).json({
            status: httpStatus.ERROR,
            message: "Internal server error",
        });
    }
};

module.exports = {
    signUp,
    signIn,
    signOut,
    makeActive,
};
