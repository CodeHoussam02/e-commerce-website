const mongoose = require('mongoose');
const validator = require('validator');
const roles = require('../Utils/user.roles')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        validator: [validator.isEmail, "Email is unvalid"], 
        unique
    }, 
    password: {
        type: String, 
        required: true, 
    }, 
    token: {
        type: String, 
        required: true
    }, 
    role: {
        enum: [roles.ADMIN, roles.MANAGER], 
        required: true,
        default: roles.USER,
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
    }
}, {timestamps: true})


module.exports = mongoose.Model('User', userSchema)