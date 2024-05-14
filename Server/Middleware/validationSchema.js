const { body } = require('express-validator');

const validateUserSchema = _ => {
    return [
        body('fullname')
            .notEmpty()
            .withMessage('Username field is required')
            .isLength({min: 4})
            .withMessage('Username format is unvalid'),
        body('email')
            .notEmpty()
            .withMessage('Email field is required'),
        body('password')
            .notEmpty()
            .withMessage('Password field is required')
            .isLength({min: 6})
            .withMessage('Password should be at least 6 chars')
    ]
}


module.exports = {
    validateUserSchema
}