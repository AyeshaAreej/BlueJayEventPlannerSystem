const User = require('../models/userSchema')
const Company = require('../models/companySchema')
const Vendor = require('../models/vendorSchema')
const Order = require('../models/orderSchema')
const CvOrder = require('../models/cvOrderSchema')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = '494898./yu!$^63df!vcxfv3278dhgdjsbv3i823'




const signUp = async (req,res)=>{

    const {password : orignalPassword} = req.body
    
    if(orignalPassword.length<5){
        return res.json({
            status:'error',
            error: 'Password should be atleast 5 characters'
        })}
    
    const password = await bcrypt.hash(orignalPassword,10)
    
    await User.create({
            username: req.body.username,
            email: req.body.email,
            password: password,
            image: req.body.image,
            phone_no: req.body.phone_no,
            city: req.body.city,
            role: 'customer',
            orders: []
        },
        (err,user)=>{
            if(err){
                console.log('error in signup')
                return res.json({status: 'error',error: 'error in signup'})
            }
           
           return res.json({status: 'ok'})
        })
    }
    
    
    

    
    //login
    const logIn = async(req,res)=>{
    
        const {email,password} = req.body
        
        const user = await User.findOne({email}).lean()
    
        if(!user){
            
            return res.json({status:"error", error : 'Invalid username/password'})
            
        }
    
        if(await bcrypt.compare(password,user.password)){
    
            const token = await jwt.sign({
                id : user._id, 
                role: user.role
            },
            JWT_SECRET
            )
            return res.json({status:"ok", token : token, data: user})
        }
    
        return res.json({status:"error", error : 'Invalid username/password'})
    
    }

    




module.exports = {}