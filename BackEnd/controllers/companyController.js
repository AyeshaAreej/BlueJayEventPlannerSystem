const Company = require('../models/companySchema')
const Order = require('../models/orderSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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
            role: 'company',
            rating: [],
            booked_dates: [],
            orders: []
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

//show profile
const showProfile = async (req,res)=>{
    Company.findById(req.user.id,(err,company)=>{
        if(err){
            return res.json({status:'error', error: 'cant find company' })
        }
      
      return res.json({ status:'ok', data: company})
   })
}

//my orders
const myOrders = async (req,res)=>{

    Company.findOne({_id: req.user.id},{orders:1,_id:0},async (err,orders)=>{

            try {
                    const my_orders =  orders.orders.map(async(o_id)=>{
                        const order = await Order.findById(o_id)
                        return order
                    })
                    
                    Promise.all(my_orders).then((my_orders)=>{
                        res.json({status:"ok",data : my_orders})
                    })
                    
            } catch (error) {
                
                    return res.json({status:"Error",error})
            }      
})

}


//approve order
const approveOrder = async (req,res)=>{

        try {
                        await Order.updateOne({_id : req.body.o_id},{$set:{status:"Approved"}})

                        Order.findById(req.body.o_id,(err,approved_order)=>{
                            if(err){
                                res.json({status:"error",err})
                            }
                        console.log(approved_order)
                        res.json({status:"ok",data : approved_order})
                        })
                
        }catch (error) {

            console.log(error)
        }
}



module.exports = {SignUp,logIn,showProfile,myOrders,approveOrder}