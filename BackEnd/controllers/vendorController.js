const Vendor = require('../models/vendorSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = '494898./yu!$^63df!vcxfv3278dhgdjsbv3i823'

//sign up
const signUp = async (req,res)=>{

    const {password : orignalPassword} = req.body

    if(orignalPassword.length<5){
        return res.json({
            status:'error',
            error: 'Password should be atleast 5 characters'
        })}
    
    const password = await bcrypt.hash(orignalPassword,10)
    Vendor.create({
            vendor_name: req.body.vendor_name,
            email: req.body.email,
            password: password,
            phone_no: req.body.phone_no,
            city: req.body.city,
            service: req.body.service,
            price_range: req.body.price_range,
            address: req.body.address,
            available_hours:req.body.available_hours,
            role: 'vendor',
            rating_list:[],
            rating: 0,
            booked_dates: [],
            orders: []
        },
        (err,vendor)=>{
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
    
    const vendor = await Vendor.findOne({email}).lean()

    if(!vendor){
        return res.json({status:"error", error : 'Invalid username/password'})
    }

    if(await bcrypt.compare(password,vendor.password)){

        const token = jwt.sign({
            id : vendor._id, role: vendor.role
        },
        JWT_SECRET
        )

        return res.json({status:"ok", data : token })
    }

    return res.json({status:"error", error : 'Invalid username/password'})

}



//show profile
const showProfile = async (req,res)=>{
    Vendor.findById(req.user.id,(err,vendor)=>{
        if(err){
            return res.json({status:'error', error: 'cant find vendor' })
        }
      
      return res.json({ status:'ok', data: vendor})
   })
}


//update Profile
const updateProfile = async (req,res)=>{


    Vendor.findByIdAndUpdate(req.user.id,{
        vendor_name: req.body.vendor_name,
        email: req.body.email,
        // image: req.body.image,
        phone_no: req.body.phone_no,
        city: req.body.city,
        price_range: req.body.price_range,
        address: req.body.address,
        available_hours: req.body.available_hours

    },
    {
        new:true
    },
    (err,vendor)=>{
        if(vendor){
            return res.json({status:'ok', data:vendor})
        }
        return res.json({status:'error', error:err})
    }
    )


}


//change Password
const changePassword = async (req,res)=>{

    const {old_password,new_password: new_orignal_password} = req.body
        
    const vendor = await Vendor.findById(req.user.id)
    if(await bcrypt.compare(old_password,vendor.password)){

        console.log("old pass correct")
            if(new_orignal_password.length<5){
                return res.json({status:'error', error: 'Password should be atleast 5 characters' })
            }

            const new_password = await bcrypt.hash(new_orignal_password,10)

            Vendor.findByIdAndUpdate(req.user.id,
                {password: new_password},
                {
                    new:true
                },
                (err,vendor)=>{
                if(vendor){
                   
                    return res.json({status:'ok'})
                }
                return res.json({status:'error', error: 'vendor not updated',err })
            })

    }else{
        return res.json({status:'error', error: 'Password is not correct' })
    }


}


//rec orders
const rec_Orders = async (req,res)=>{

    Company.findOne({_id: req.user.id},{orders:1,_id:0},async (err,orders)=>{

            try {
                    const my_orders =  orders.orders.map(async(o_id)=>{
                        const order = await Order.findOne({_id:o_id,status:'Pending'})
                        console.log("1",order)
                        return order
                    })
                    
                    Promise.all(my_orders).then((my_orders)=>{
                        console.log(my_orders)
                        res.json({status:"ok",data : my_orders})
                    })
                    
            } catch (error) {
                
                    // return res.json({status:"Error",error})
                    console.log(error)
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



//reject order
const rejectOrder = async (req,res)=>{



}




//my orders
const myOrders = async (req,res)=>{

    Vendor.findOne({_id: req.user.id},{orders:1,_id:0},async (err,orders)=>{

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





module.exports = {signUp,logIn,showProfile,myOrders,approveOrder,updateProfile,changePassword}