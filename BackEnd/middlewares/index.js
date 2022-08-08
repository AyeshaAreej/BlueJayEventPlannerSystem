const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')

const JWT_SECRET = '494898./yu!$^63df!vcxfv3278dhgdjsbv3i823'

const ValidateToken = async (req, res, next) => {

    const {token} = req.headers;

        const user = jwt.verify(token,JWT_SECRET)
        if (user){
            req.user = user
            console.log(user)
            next()
        }else{
            return res.json({
                status:'error',
                error: 'Log In again'
            })
        }
}

  module.exports = {ValidateToken}