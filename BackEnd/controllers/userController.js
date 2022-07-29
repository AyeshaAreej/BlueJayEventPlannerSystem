const User = require('../models/userSchema')
const Company = require('../models/companySchema')
const Order = require('../models/orderSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'


//SignUp
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
        return res.json({status:"ok", data : token })
    }

    return res.json({status:"error", error : 'Invalid username/password'})

}

// -HOME SCREEN

//search company
const searchCompany = async (req,res)=>{
    
    console.log('inside search company')

    //case sensitive
    const {search_text,city} = req.body
    
     Company.find({"company_name" : {$regex : search_text}, "city": city},(err,companies)=>{
        if(err){
            console.log('error in search company')
            return res.json({status: 'error',error: 'error in search company'})
        }
        return res.json({status:'ok', data: companies})
    })

   
}


// search by date
const searchByDate = async (req,res)=>{

    const {city} = req.body

    Company.find({city: city}, (err,companies)=>{
        if(companies){
            
            const result = []
                     for(i of companies){ //getting whole objects
                                    var count = 0

                                    for (date of i.booked_dates){ //getting dates from array
                                        if(date == req.body.date)
                                        {
                                            count+=1
                                        }
                                    }

                                    if(count<=3){
                                      result.push(i)
                                    }

                    }

                       
                return res.json({status: 'ok',data:result})
        
        
        }
        return res.json({status: 'error',error: 'error in search company by dates'})
    })

}


//all companies of a city
const allCompanies = async (req,res)=>{
    //get user from token
    //console.log(req.body.city)

    const city = req.body.city
     Company.find({city},(err,companies)=>{
        if(err){
            console.log('error in all companies')
            return res.json({status: 'error',error: 'error in all companies'})
        }
        console.log(companies)
        return res.json({status:'ok', data: companies})
    })
}


//top rated
const topRated = async (req,res)=>{
   
    const city = req.body.city
     Company.find({city},(err,companies)=>{
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
     Company.find({city},(err,companies)=>{
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
     Company.find({city},(err,companies)=>{
        if(err){
            console.log('error in high Price')
            return res.json({status: 'error',error: 'error in high Price'})
        }
        return res.json({status:'ok', data: companies})
    }).sort({price_range:-1})
}

//create order
const createOrder = async (req,res)=>{
    
    const c_id = req.body.c_id
     
    User.findById(req.user.id,(err,user)=>{
        if(err){
                  return res.json({status:'error',error: 'cant find user'})
                }
        else{
                  Order.create({
                            client_name: user.username, 
                            email: user.email, 
                            city: user.city,
                            phone_no: user.phone_no,
                            event_type: req.body.event_type,
                            date: req.body.date,
                            no_of_guests: req.body.no_of_guests,
                            available_budget: req.body.available_budget,
                            venue: req.body.venue,
                            required_services: req.body.required_services
                        },(err,order)=>{
                            if(err){
                                console.log('error in order creation')
                                return res.json({status: 'error',error: 'error in order creation'})
                            }

                                User.findOneAndUpdate ({_id: user._id},{ $push: { orders: order._id } },(err,user)=>{
                                    if (user)
                                    {
                                        console.log("good")
                                       
                                    }else{
                                        console.log(err)
                                        console.log("error in user order id")
                                    }
                                    
                                  
                                })

                                Company.findOneAndUpdate ({_id: c_id},{ $push: { orders: order._id, booked_dates: order.date }},(err,user)=>{
                                    if (user)
                                    {
                                        console.log("best")
                                        
                                    }else{
                                        console.log(err)
                                        console.log("error in company book dates")
                                    }
                                    
                                })

                            return res.json({status: 'ok'})
                    })
    
    }
    })
}


//PROFILE
const showProfile = async (req,res)=>{

      User.findById(req.user.id,(err,user)=>{
          if(err){
              return res.json({status:'error', error: 'cant find user' })
          }
        
        return res.json({ status:'ok', data: user})
     })
   
}


//edit profile
const editProfile =  (req,res)=>{


    User.findByIdAndUpdate(req.user.id,{
        username: req.body.username,
        email: req.body.email,
        phone_no: req.body.phone_no,
        city: req.body.city
    },
    {
        new:true
    },
    (err,user)=>{
        return res.json(user)
    }
    )

       
}

//change password
const changePassword = async (req,res)=>{

        const {old_password,new_password: new_orignal_password} = req.body
        
        const user = await User.findById(req.user.id)
        if(await bcrypt.compare(old_password,user.password)){

                if(new_orignal_password.length<5){
                    return res.json({status:'error', error: 'Password should be atleast 5 characters' })
                }

                const new_password = await bcrypt.hash(new_orignal_password,10)

                User.findByIdAndUpdate(req.user.id,
                    {password: new_password},
                    {
                        new:true
                    },
                    (err,user)=>{
                    if(user){
                       
                        return res.json({status:'ok', data: user })
                    }
                    return res.json({status:'error', error: 'user not updated',err })
                })

        }else{
            return res.json({status:'error', error: 'Password is not correct' })
        }

       


    
}



//MY ORDERS
const myOrders = async (req,res)=>{

    User.findOne({_id: req.user.id},{orders:1,_id:0},async (err,orders)=>{

            //    try {
            //                 const my_new_orders = []
            //                 for(i of my_orders.orders){
            //                         const order = await Order.findById(i)
            //                         my_new_orders.push(order)
            
                                    
            //                 }
                            
            //                 return res.json({ status:'ok', data: my_new_orders})
                
            //    } catch (error) {
            //                 return res.json({status:"Error",error})
            //    }
                
                try {
                        const my_orders =  orders.orders.map(async (o_id)=>{
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


//order details
const orderDetails = async (req,res)=>{
    Order.findById(req.body.o_id,(err,order)=>{
        if(err){
            res.json({status:"error",err})
        }
        res.json({status:"ok",data : order})
    })
}


const rateCompany = async (req,res)=>{
    //console.log(req.body)
    const {c_id, order_rating} = req.body
    const company = await Company.findByIdAndUpdate(c_id, {$push: { rating_list : order_rating } })

    var sum = 0;
    const list = company.rating_list
    for(i of list){
        sum +=i
    }
    const avg = sum/list.length
    
    Company.findByIdAndUpdate(company._id,{$set:{rating:avg}},{
        new:true
    },(err,company)=>{
        if(err){
            return res.json({status:"error",err})
        }
        return res.json({status:"ok",company})
    })
    
}



module.exports = {signUp,logIn,searchCompany,searchByDate,allCompanies,topRated,lowPrice,highPrice,
                  createOrder,showProfile,editProfile,changePassword,myOrders,orderDetails,rateCompany}