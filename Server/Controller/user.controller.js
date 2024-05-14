const User = require('../Model/user.model')
const httpStatus = require('../Utils/http.text')

const getUsers = async (req, res, next) => {
    try {
        const query = req.query;
        const limit = query.limit || 10;
        const page  = query.page | 1;
        const skip  = ( page - 1 ) * limit;
        const users = await User.find({}, {password: 0, __v: 0}).limit(limit).skip(skip)
        if (!users) {
            return res.status(404).json({
                status: httpStatus.FAIL, 
                data: null,
                message: 'no users found'
            })
        }
        res.status(200).json({
            status: httpStatus.SUCCES, 
            data: {
                users
            }
        })
    }
    catch (err) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    //
}

const updateUser = async (req, res, next) => {
    //
}

const deleteUser = async (req, res, next) => {
    //
}


module.exports = {
    getUsers,
    getUser,
    updateUser, 
    deleteUser
}