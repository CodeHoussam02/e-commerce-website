const express = require('express');
const userActions = require('../Controller/user.controller')
const router  = express.Router();

router.route('/')
    .get()