const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

const tokenGenerator = async (payload) => {
    const token = await jwt.sign(
        payload, 
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '4m'
        }
    )
    return token
}

module.exports = tokenGenerator