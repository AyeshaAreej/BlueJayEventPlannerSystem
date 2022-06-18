const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//SignUp
const SignUp = async (req,res)=>{
//console.log(req.body)
const {password : orignalPassword} = req.body

if(orignalPassword.length<5){
    return res.json({
        status:'error',
        error: 'Password should be atleast 5 characters'
    })}

const password = await bcrypt.hash(orignalPassword,10)

User.create({
        username: req.body.username,
        email: req.body.email,
        password: password,
        phone_no: req.body.phone_no,
        city: req.body.city,
        orders: null
    },
    (err,user)=>{
        if(err){
            console.log('error in signup')
            return res.json({status: 'error',error: 'error in signup'
        })
        }
       //console.log(user)
       return res.json({status: 'ok'})
    })
}



//UE(splash screen)
const UE = async(req,res)=>{

    const {token}= req.body
    
        const user = jwt.verify(token,process.env.SECRET)
        if(user){
            return res.json({
                status:'ok',
                data: user
            })
        }else{
            return res.json({
                        status:'error',
                        error: 'Log In again'
                    })
        }

    // if(req.body.token== '')
    // {
    //     return res.json({
    //         status:'error',
    //         error: 'Log In again'
    //     })
    // }else{
    //     const user = jwt.verify(token,process.env.SECRET)
    //     return res.json({
    //         status:'ok',
    //         data: user
    //     })
    // }

}


//login
const logIn = async(req,res)=>{

    const {email,password} = req.body
    
    const user = await User.findOne({email}).lean()

    if(!user){
        return res.json({status:"error", error : 'Invalid username/password'})
    }

    if(await bcrypt.compare(password,user.password)){

        const token = jwt.sign({
            id : user._id, username: user.username
        },
        process.env.SECRET
        )

        return res.json({status:"ok", data : token })
    }

    return res.json({status:"error", error : 'Invalid username/password'})

}

//home screen
const homescreen = async (req,res)=>{
    console.log('in home')
    return res.json({status:'ok'})
}

module.exports = {SignUp,logIn,homescreen,UE}