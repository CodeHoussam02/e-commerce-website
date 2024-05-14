const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const colors = require("colors");
const mongoose = require("mongoose");
const cors = require("cors");
const httpStatus = require("./Utils/http.text");
const authRouter = require("./Route/auth.route");
const userRouter = require("./Route/user.route");

// configure the env variables
dotenv.config();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

// accept json requrets from the server as well as accepting browser requests
app.use(bodyParser.json());
app.use(cors());

// app routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

// global non exesting routes handler
app.all("*", (req, res, next) => {
    res.status(500).json({
        status: httpStatus.ERROR,
        data: null,
        message: "This ressource is not available",
    });
    next();
});

// global error hanlder
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        status: httpStatus.ERROR,
        code: error.statusCode,
        data: null,
    });
});

// listen to the server
app.listen(PORT, (_) => {
    console.log(`-> listening on http://localhost:${PORT}`.yellow.bold);
});

// database connection
mongoose
    .connect(MONGO_URL)
    .then((_) => {
        console.log("-> Connected successfully to mongodb".yellow.bold);
    })
    .catch((err) => {
        console.log("-> Error : Connection Failed");
    });
