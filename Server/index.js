const express = require('express');
const app = express();
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


// configure the env variables
dotenv.config()
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;


// accept json requrets from the server as well as accepting browser requests 
app.use(bodyParser.json());
app.use(cors());


// listen to the server 
app.listen(PORT, _ => {
    console.log(`-> listening on http://localhost:${PORT}`)
})

// database connection 
mongoose.connect(MONGO_URL)
    .then(_ => {
        console.log('-> Connected successfully to mongodb')
    })
    .catch (err => {
        console.log('-> Error : Connection Failed')
    })