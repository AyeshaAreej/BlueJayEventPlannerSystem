const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')

const ValidateToken = async (req, res, next) => {

    const {token} = req.body;

        const user = jwt.verify(token,process.env.SECRET)
        if (user){
            req.user = user
            console.log(user.role)
            next()
        }else{
            return res.json({
                status:'error',
                error: 'Log In again'
            })
        }
}

  module.exports = {ValidateToken}