const mongoose  = require('mongoose');
const validator = require('validator');
const roles     = require('../Utils/user.roles');


const userSchema = new mongoose.Schema({
    fullname: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
        validate: [validator.isEmail, 'Email is unvalid']
    }, 
    password: {
        type: String,
        reequired: true
    }, 
    token: {
        type: String, 
        required: true
    }, 
    role: {
        type: String,
        required: true,
        enum: [roles.ADMIN, roles.USER, roles.MANAGER], 
        default: roles.USER
    }, 
    isAdmin: {
        type: Boolean, 
        required: true, 
        default: false
    }, 
    isActive: {
        type: Boolean, 
        required: true,
        default: false
    }, 
    activationCode: String
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)





