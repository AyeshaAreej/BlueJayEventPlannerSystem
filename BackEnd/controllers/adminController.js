const User = require('../models/userSchema')
const Company = require('../models/companySchema')
const Admin = require('../models/adminSchema')
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
    
    await Admin.create({
            admin_name: req.body.admin_name,
            email: req.body.email,
            password: password,
            image: "0",
            phone_no: req.body.phone_no,
            city: req.body.city,
            role: 'admin'
        },
        (err,admin)=>{
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
        
        const admin = await Admin.findOne({email}).lean()
    
        if(!admin){
            
            return res.json({status:"error", error : 'Invalid admin_name/password'})
            
        }
    
        if(await bcrypt.compare(password,admin.password)){
    
            const token = await jwt.sign({
                id : admin._id, 
                role: admin.role
            },
            JWT_SECRET
            )
            return res.json({status:"ok", token : token, data: admin})
        }
    
        return res.json({status:"error", error : 'Invalid admin_name/password'})
    
    }

    

    const changePassword = async (req,res)=>{

        const {old_password,new_password: new_orignal_password} = req.body
                
                const admin = await admin.findById(req.user.id)
                if(await bcrypt.compare(old_password,admin.password)){
        
                    console.log("old pass correct")
                        if(new_orignal_password.length<5){
                            return res.json({status:'error', error: 'Password should be atleast 5 characters' })
                        }
        
                        const new_password = await bcrypt.hash(new_orignal_password,10)
        
                        Admin.findByIdAndUpdate(req.user.id,
                            {password: new_password},
                            {
                                new:true
                            },
                            (err,admin)=>{
                            if(admin){
                            //    console.log(company)
                                return res.json({status:'ok'})
                            }
                            return res.json({status:'error', error: 'company password not updated, Try again',err })
                        })
        
                }else{
                    return res.json({status:'error', error: 'Old Password is not correct' })
                }
        
        }
        

        const getNewRegs = async (req,res)=>{

            try {

                Company.find({verified:false},async(err,companies)=>{
                    if(companies){
                        
                            return res.json({status:'ok',data:companies})
                        }
                        return res.json({status:'error', error: 'company not found'})

                })

                
            } catch (error) {
                return res.json({status:'error'})
                
            }

        }


        const acceptCompany = async (req,res)=>{

            try {

                Company.findByIdAndUpdate({_id:req.body.c_id},{$set:{verified:true}},async(err,companies)=>{
                    if(companies){
                        
                            return res.json({status:'ok'})
                        }
                        return res.json({status:'error', error: 'company not found'})

                })

                
            } catch (error) {
                return res.json({status:'error'})
                
            }

        }


        const rejectCompany = async (req,res)=>{

            try {

                Company.findByIdAndDelete({_id:req.body.c_id},async(err,companies)=>{
                    if(companies){
                        
                            return res.json({status:'ok'})
                        }
                        return res.json({status:'error', error: 'company not found'})

                })

                
            } catch (error) {
                
            }

        }
    
        



module.exports = {signUp,logIn,changePassword,getNewRegs,acceptCompany,rejectCompany}