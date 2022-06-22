const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')

const ValidateToken = async (req, res, next) => {

    const {token} = req.body;

        const user = jwt.verify(token,process.env.SECRET)
        if (user){
                        
                        // User.findById(user.id,(err,myuser)=>{
                        // if(err){
                        //     return res.json({
                        //         status:'error',
                        //         error: 'cant find user'
                        //     })
                        // }else{
                        //     console.log(myuser.email)
                        // }})
            req.user = user
            next()
        }else{
            return res.json({
                status:'error',
                error: 'Log In again'
            })
        }
}

  module.exports = {ValidateToken}