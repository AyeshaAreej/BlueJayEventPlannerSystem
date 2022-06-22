const User = require('../models/userSchema')
const Company = require('../models/companySchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//UE(splash screen)
const UE = (req,res)=>{

               return res.json({
                status:'ok',
                data: req.user
            })

}


//SignUp
const SignUp = async (req,res)=>{

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
        phone_no: req.body.phone_no,
        city: req.body.city,
        orders: null
    },
    (err,user)=>{
        if(err){
            console.log('error in signup')
            return res.json({status: 'error',error: 'error in signup'})
        }
       //console.log(user)
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
            id : user._id, username: user.username
        },
        process.env.SECRET
        )

        return res.json({status:"ok", data : token })
    }

    return res.json({status:"error", error : 'Invalid username/password'})

}

// S1-HOME SCREEN

//search company
const searchCompany = async (req,res)=>{
    //get user from token
    //console.log(req.user)

    //case sensitive
    const search_text = req.body.search_text
    await Company.find({"company_name" : {$regex : search_text}},(err,companies)=>{
        if(err){
            console.log('error in search company')
            return res.json({status: 'error',error: 'error in search company'})
        }
        return res.json({status:'ok', data: companies})
    })

   
}


//all companies of a city
const allCompanies = async (req,res)=>{
    //get user from token
    //console.log(req.user)

    const city = req.body.city
    await Company.find({city},(err,companies)=>{
        if(err){
            console.log('error in all companies')
            return res.json({status: 'error',error: 'error in all companies'})
        }
        return res.json({status:'ok', data: companies})
    })

   
}


//top rated
const topRated = async (req,res)=>{
   
    const city = req.body.city
    await Company.find({city},(err,companies)=>{
        if(err){
            console.log('error in top rated companies')
            return res.json({status: 'error',error: 'error in top rated companies'})
        }
        return res.json({status:'ok', data: companies})
    }).sort({rating:-1})

}

//low price 
const lowPrice = async (req,res)=>{
    const city = req.body.city
    await Company.find({city},(err,companies)=>{
        if(err){
            console.log('error in low Price')
            return res.json({status: 'error',error: 'error in low Price'})
        }
        return res.json({status:'ok', data: companies})
    }).sort({price_range:1})

}


// high price
const highPrice = async (req,res)=>{
    const city = req.body.city
    await Company.find({city},(err,companies)=>{
        if(err){
            console.log('error in high Price')
            return res.json({status: 'error',error: 'error in high Price'})
        }
        return res.json({status:'ok', data: companies})
    }).sort({price_range:-1})
}

// S2-Profile
//duplicate to splash screen
const showProfile = async (req,res)=>{

     await User.findById(req.user.id,(err,user)=>{
          if(err){
              return res.json({status:'error', error: 'cant find user' })
          }
        
        return res.json({ status:'ok', data: user})
     })
   
}

//S3-SIGNOUT
const signOut = async (req,res)=>{

    await User.findById(req.user.id,(err,user)=>{
         if(err){
             return res.json({status:'error', error: 'cant find user' })
         }
       
       return res.json({ status:'ok', data: user})
    })
  
}



module.exports = {UE,SignUp,logIn,searchCompany,allCompanies,topRated,lowPrice,highPrice,showProfile,signOut}