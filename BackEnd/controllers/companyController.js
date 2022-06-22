const Company = require('../models/companySchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



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

//sign up
const SignUp = async (req,res)=>{

    const {password : orignalPassword} = req.body

    if(orignalPassword.length<5){
        return res.json({
            status:'error',
            error: 'Password should be atleast 5 characters'
        })}
    
    const password = await bcrypt.hash(orignalPassword,10)
    Company.create({
            company_name: req.body.company_name,
            email: req.body.email,
            password: password,
            phone_no: req.body.phone_no,
            city: req.body.city,
            services: req.body.services,
            price_range: req.body.price_range,
            address: req.body.address,
            available_hours:req.body.available_hours,
            rating:null,
            //rating:req.body.rating,
            orders: null
        },
        (err,company)=>{
            if(err){
                console.log('error in signup')
                return res.json({status: 'error',error: 'error in signup'})
            }
           return res.json({status: 'ok'})
        })
}


//log in
const logIn = async (req,res)=>{
    const {email,password} = req.body
    
    const company = await Company.findOne({email}).lean()

    if(!company){
        return res.json({status:"error", error : 'Invalid username/password'})
    }

    if(await bcrypt.compare(password,company.password)){

        const token = jwt.sign({
            id : company._id, company_name: company.company_name
        },
        process.env.SECRET
        )

        return res.json({status:"ok", data : token })
    }

    return res.json({status:"error", error : 'Invalid username/password'})

}



module.exports = {UE,SignUp,logIn}