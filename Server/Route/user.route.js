const express = require('express');
const userActions = require('../Controller/user.controller')
const router  = express.Router();

router.route('/')
    .get(userActions.getUsers)

router.route('/id')
    .get(userActions.getUser)
    .patch(userActions.updateUser)
    .delete(userActions.deleteUser)



module.exports = router