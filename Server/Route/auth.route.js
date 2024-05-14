const express = require("express");
const router = express.Router();
const authActions = require("../Controller/auth.controller");
const { validateUserSchema } = require("../Middleware/validationSchema");

router.route("/signup").post(validateUserSchema(), authActions.signUp);

router.route("/login").post(authActions.signIn);

router.route("verification/:activationcode")
    .post(authActions.makeActive)

// router.route('/email')
//     .post(authActions.sendMail)

module.exports = router;
