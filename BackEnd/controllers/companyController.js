const Company = require('../models/companySchema')
const CvOrder = require('../models/cvOrderSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Order = require('../models/orderSchema')
const Vendor = require('../models/vendorSchema')
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
            rating_list:[],
            rating: 0,
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
            id : company._id, role: company.role
        },
        JWT_SECRET
        )

        return res.json({status:"ok", data : token })
    }

    return res.json({status:"error", error : 'Invalid username/password'})

}




//search Vendor
const searchVendor = async (req,res)=>{

      
    //case sensitive
    const {search_text} = req.body
    
    var Mycity
    const company = await Company.findById({_id: req.user.id})

    if(req.body.city === '' || req.body.city === undefined){
        Mycity=company.city
    }else{
        Mycity=req.body.city
    }

    console.log(Mycity)

     Vendor.find({"vendor_name" : {$regex : search_text }, "city": Mycity},(err,vendors)=>{
        if(vendors){
            
            const result = []
                     for(i of vendors){ //getting whole objects
                                    var count = 0

                                    for (date of i.booked_dates){ //getting dates from array
                                        if(date === req.body.date)
                                        {
                                            count+=1
                                        }
                                    }

                                    console.log(count)
                                    if(count<=2){ //3 allowed
                                      result.push(i)
                                    }

                    }

                       
                return res.json({status: 'ok',data:result})
        
        
        }
        return res.json({status: 'error',error: 'error in search vendor by name'})
    })

   

}



//searchByDate
const searchByDate = async (req,res)=>{

    var Mycity
    const company = await Company.findById({_id: req.user.id})

    if(req.body.city === '' || req.body.city === undefined){
        Mycity=company.city
    }else{
        Mycity=req.body.city
    }

    console.log(Mycity)

    Vendor.find({city: Mycity}, (err,vendors)=>{
        if(vendors){

            const result = []
                     for(i of vendors){ //getting whole objects
                                    var count = 0

                                    for (date of i.booked_dates){ //getting dates from array
                                        if(date === req.body.date)
                                        {
                                            count+=1
                                        }
                                    }

                                    console.log(count)
                                    if(count<=2){ //3 allowed
                                      result.push(i)
                                    }

                    }

                       
                return res.json({status: 'ok',data:result})
        
        
        }
        return res.json({status: 'error',error: 'error in search vendors by dates'})
    })

}

//caterers
const caterers = async (req,res)=>{

    console.log(req.body.date)

   var Mycity
    const company = await Company.findById({_id: req.user.id})

    if(req.body.city === '' || req.body.city === undefined){
        Mycity=company.city
    }else{
        Mycity=req.body.city
    }

    console.log(Mycity)


     Vendor.find({city: Mycity, service: "Caterer"},(err,vendors)=>{
        if(vendors){
            
            const result = []
                     for(i of vendors){ //getting whole objects
                                    var count = 0

                                    for (date of i.booked_dates){ //getting dates from array
                                        if(date === req.body.date)
                                        {
                                            count+=1
                                        }
                                    }

                                    //console.log(count)
                                    if(count<=2){ //3 allowed
                                      result.push(i)
                                    }

                    }                       
                return res.json({status: 'ok',data:result})
        }
        return res.json({status: 'error',error: 'error in search vendor'})

    })


}


//decoration
const decoration = async (req,res)=>{
    console.log(req.body.date)

    var Mycity
     const company = await Company.findById({_id: req.user.id})
 
     if(req.body.city === '' || req.body.city === undefined){
         Mycity=company.city
     }else{
         Mycity=req.body.city
     }
 
     console.log(Mycity)
 
 
      Vendor.find({city: Mycity, service: "Decoration"},(err,vendors)=>{
         if(vendors){
             
             const result = []
                      for(i of vendors){ //getting whole objects
                                     var count = 0
 
                                     for (date of i.booked_dates){ //getting dates from array
                                         if(date === req.body.date)
                                         {
                                             count+=1
                                         }
                                     }
 
                                     //console.log(count)
                                     if(count<=2){ //3 allowed
                                       result.push(i)
                                     }
 
                     }                       
                 return res.json({status: 'ok',data:result})
         }
         return res.json({status: 'error',error: 'error in search vendor'})
 
     })
 
}


//venue
const venue = async (req,res)=>{
    console.log(req.body.date)

    var Mycity
     const company = await Company.findById({_id: req.user.id})
 
     if(req.body.city === '' || req.body.city === undefined){
         Mycity=company.city
     }else{
         Mycity=req.body.city
     }
 
     console.log(Mycity)
 
 
      Vendor.find({city: Mycity, service: "Venue"},(err,vendors)=>{
         if(vendors){
             
             const result = []
                      for(i of vendors){ //getting whole objects
                                     var count = 0
 
                                     for (date of i.booked_dates){ //getting dates from array
                                         if(date === req.body.date)
                                         {
                                             count+=1
                                         }
                                     }
 
                                     //console.log(count)
                                     if(count<=2){ //3 allowed
                                       result.push(i)
                                     }
 
                     }                       
                 return res.json({status: 'ok',data:result})
         }
         return res.json({status: 'error',error: 'error in search vendor'})
 
     })
 
}


//photographers
const photographers = async (req,res)=>{
    console.log(req.body.date)

    var Mycity
     const company = await Company.findById({_id: req.user.id})
 
     if(req.body.city === '' || req.body.city === undefined){
         Mycity=company.city
     }else{
         Mycity=req.body.city
     }
 
     console.log(Mycity)
 
 
      Vendor.find({city: Mycity, service: "Photography"},(err,vendors)=>{
         if(vendors){
             
             const result = []
                      for(i of vendors){ //getting whole objects
                                     var count = 0
 
                                     for (date of i.booked_dates){ //getting dates from array
                                         if(date === req.body.date)
                                         {
                                             count+=1
                                         }
                                     }
 
                                     //console.log(count)
                                     if(count<=2){ //3 allowed
                                       result.push(i)
                                     }
 
                     }                       
                 return res.json({status: 'ok',data:result})
         }
         return res.json({status: 'error',error: 'error in search vendor'})
 
     })
 
}


//create Order
const createCatererOrder = async (req,res)=>{

    const v_id = req.body.v_id
     
    Order.findById(req.body.o_id,async (err,order)=>{
        if(err){
                  return res.json({status:'error',error: 'cant find order'})
                }
        else{
                  const company = await Company.findById({_id: req.user.id})
                  const vendor = await Vendor.findById({_id: v_id})

                  CvOrder.create({
                            company_id: company._id,
                            company_name: company.company_name, 
                            vendor_id: vendor._id,
                            vendor_name: vendor.vendor_name,
                            // vendor_pic: vendor.image,
                            vendor_pic:1,
                            city: company.city,
                            c_phone_no: company.phone_no,
                            v_phone_no: vendor.phone_no,
                            event_type: order.event_type,  
                            date: order.date,              
                            no_of_guests: req.body.no_of_guests, 
                            available_budget: req.body.available_budget,
                            required_service: vendor.service,
                            special_instructions: req.body.special_instructions,

                            location: req.body.location,
                            time: req.body.time,
                            menu: req.body.menu


                        },(err,cv_order)=>{
                            if(err){
                               console.log('error in order creation')
                               //console.log(err)
                                return res.json({status: 'error',error: err})
                            }

                                Order.findOneAndUpdate ({_id: req.body.o_id},{ $push: { sub_orders: cv_order._id } },(err,updated_order)=>{
                                    if (updated_order)
                                    {
                                        console.log("good")
                                       
                                    }else{
                                        console.log(err)
                                        console.log("error in order sub_order id")
                                    }
                                    
                                  
                                })

                                Vendor.findOneAndUpdate ({_id: v_id},{ $push: { orders: cv_order._id, booked_dates: cv_order.date }},(err,updated_vendor)=>{
                                    if (updated_vendor)
                                    {
                                        console.log("best")
                                        
                                    }else{
                                        console.log(err)
                                        console.log("error in vendor book dates")
                                    }
                                    
                                })

                            return res.json({status: 'ok'})
                    })
    
    }
    })
}


//Decoration Order

const createDecorationOrder = async (req,res)=>{

    const v_id = req.body.v_id
     
    Order.findById(req.body.o_id,async (err,order)=>{
        if(err){
                  return res.json({status:'error',error: 'cant find order'})
                }
        else{
                  const company = await Company.findById({_id: req.user.id})
                  const vendor = await Vendor.findById({_id: v_id})

                  CvOrder.create({
                    company_id: company._id,
                    company_name: company.company_name, 
                    vendor_id: vendor._id,
                    vendor_name: vendor.vendor_name,
                    //vendor_pic: vendor.image,
                    vendor_pic:1,
                    city: company.city,
                    c_phone_no: company.phone_no,
                    v_phone_no: vendor.phone_no,
                    event_type: order.event_type,  
                    date: order.date,              
                    no_of_guests: req.body.no_of_guests, 
                    available_budget: req.body.available_budget,
                    required_service: vendor.service,
                    special_instructions: req.body.special_instructions,

                
                    location: req.body.location_address,
                    location_details: req.body.location_details,
                    decor_theme_detail: req.body.decor_theme_detail,
                    time: req.body.time


                        },(err,cv_order)=>{
                            if(err){
                                console.log('error in order creation')
                                return res.json({status: 'error',error: err})
                            }

                                Order.findOneAndUpdate ({_id: req.body.o_id},{ $push: { sub_orders: cv_order._id } },(err,updated_order)=>{
                                    if (updated_order)
                                    {
                                        console.log("good")
                                       
                                    }else{
                                        console.log(err)
                                        console.log("error in order sub_order id")
                                    }
                                    
                                  
                                })

                                Vendor.findOneAndUpdate ({_id: v_id},{ $push: { orders: cv_order._id, booked_dates: cv_order.date }},(err,updated_vendor)=>{
                                    if (updated_vendor)
                                    {
                                        console.log("best")
                                        
                                    }else{
                                        console.log(err)
                                        console.log("error in vendor book dates")
                                    }
                                    
                                })

                            return res.json({status: 'ok'})
                    })
    
    }
    })
}


//Venue Order
const createVenueOrder = async (req,res)=>{

    const v_id = req.body.v_id
     
    Order.findById(req.body.o_id,async (err,order)=>{
        if(err){
                  return res.json({status:'error',error: 'cant find order'})
                }
        else{
                  const company = await Company.findById({_id: req.user.id})
                  const vendor = await Vendor.findById({_id: v_id})

                  CvOrder.create({
                            company_id: company._id,
                            company_name: company.company_name, 
                            vendor_id: vendor._id,
                            vendor_name: vendor.vendor_name,
                            //vendor_pic: vendor.image,
                            vendor_pic:1,
                            city: company.city,
                            c_phone_no: company.phone_no,
                            v_phone_no: vendor.phone_no,
                            event_type: order.event_type,  
                            date: order.date,              
                            no_of_guests: req.body.no_of_guests, 
                            available_budget: req.body.available_budget,
                            required_service: vendor.service,
                            special_instructions: req.body.special_instructions,


                            start_time: req.body.start_time,
                            end_time: req.body.end_time,
                            venue_catering: req.body.venue_catering,
                            venue_decor: req.body.venue_decor,
                            menu: req.body.menu,
                            decor_theme_detail: req.body.decor_theme_detail

                           
                        },(err,cv_order)=>{
                            if(err){
                                console.log('error in order creation')
                                return res.json({status: 'error',error: err})
                            }

                                Order.findOneAndUpdate ({_id: req.body.o_id},{ $push: { sub_orders: cv_order._id } },(err,updated_order)=>{
                                    if (updated_order)
                                    {
                                        console.log("good")
                                       
                                    }else{
                                        console.log(err)
                                        console.log("error in order sub_order id")
                                    }
                                    
                                  
                                })

                                Vendor.findOneAndUpdate ({_id: v_id},{ $push: { orders: cv_order._id, booked_dates: cv_order.date }},(err,updated_vendor)=>{
                                    if (updated_vendor)
                                    {
                                        console.log("best")
                                        
                                    }else{
                                        console.log(err)
                                        console.log("error in vendor book dates")
                                    }
                                    
                                })

                            return res.json({status: 'ok'})
                    })
    
    }
    })
}


//Photographer Order
const createPhotographerOrder = async (req,res)=>{

    const v_id = req.body.v_id
     
    Order.findById(req.body.o_id,async (err,order)=>{
        if(err){
                  return res.json({status:'error',error: 'cant find order'})
                }
        else{
                  const company = await Company.findById({_id: req.user.id})
                  const vendor = await Vendor.findById({_id: v_id})

                  CvOrder.create({
                           company_id: company._id,
                            company_name: company.company_name, 
                            vendor_id: vendor._id,
                            vendor_name: vendor.vendor_name,
                            //vendor_pic: vendor.image,
                            vendor_pic:1,
                            city: company.city,
                            c_phone_no: company.phone_no,
                            v_phone_no: vendor.phone_no,
                            event_type: order.event_type,  
                            date: order.date,       
                            no_of_guests: order.no_of_guests,       
                            available_budget: req.body.available_budget,
                            required_service: vendor.service,
                            special_instructions: req.body.special_instructions,

                            session_time: req.body.session_time,
                            location: req.body.location,
                            time: req.body.time,
                            shoot_type: req.body.shoot_type



                        },(err,cv_order)=>{
                            if(err){
                                //console.log('error in order creation')
                                console.log(err)
                                return res.json({status: 'error',error: err})
                            }

                                Order.findOneAndUpdate ({_id: req.body.o_id},{ $push: { sub_orders: cv_order._id } },(err,updated_order)=>{
                                    if (updated_order)
                                    {
                                        console.log("good")
                                       
                                    }else{
                                        console.log(err)
                                        console.log("error in order sub_order id")
                                    }
                                    
                                  
                                })

                                Vendor.findOneAndUpdate ({_id: v_id},{ $push: { orders: cv_order._id, booked_dates: cv_order.date }},(err,updated_vendor)=>{
                                    if (updated_vendor)
                                    {
                                        console.log("best")
                                        
                                    }else{
                                        console.log(err)
                                        console.log("error in vendor book dates")
                                    }
                                    
                                })

                            return res.json({status: 'ok'})
                    })
    
    }
    })
}





//rate Vendor
const rateVendor = async (req,res)=>{
  //console.log(req.body)
  const {v_id, order_rating} = req.body
  const vendor = await Vendor.findByIdAndUpdate(v_id, {$push: { rating_list : order_rating } })

  var sum = 0;
  const list = vendor.rating_list
  for(i of list){
      sum +=i
  }
  const avg = sum/list.length
  
  Vendor.findByIdAndUpdate(vendor._id,{$set:{rating:avg}},{
      new:true
  },(err,vendor)=>{
      if(err){
          return res.json({status:"error",err})
      }
      return res.json({status:"ok",vendor})
  })
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


//update Profile
const updateProfile = async (req,res)=>{



    Company.findByIdAndUpdate(req.user.id,{
        company_name: req.body.company_name,
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
    (err,company)=>{
        if(company){
            return res.json({status:'ok', data:company})
        }
        return res.json({status:'error', error:err})
    }
    )


}


//change Password
const changePassword = async (req,res)=>{

    const {old_password,new_password: new_orignal_password} = req.body
        
        const company = await Company.findById(req.user.id)
        if(await bcrypt.compare(old_password,company.password)){

            console.log("old pass correct")
                if(new_orignal_password.length<5){
                    return res.json({status:'error', error: 'Password should be atleast 5 characters' })
                }

                const new_password = await bcrypt.hash(new_orignal_password,10)

                Company.findByIdAndUpdate(req.user.id,
                    {password: new_password},
                    {
                        new:true
                    },
                    (err,company)=>{
                    if(company){
                       
                        return res.json({status:'ok'})
                    }
                    return res.json({status:'error', error: 'company not updated',err })
                })

        }else{
            return res.json({status:'error', error: 'Password is not correct' })
        }

}




//my orders
const myOrders = async (req,res)=>{

    Company.findOne({_id: req.user.id},{orders:1,_id:0},async (err,orders)=>{

            try {
                    const my_orders =  orders.orders.map(async(o_id)=>{
                        const order = await Order.findOne({_id:o_id,status:'Approved'})
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

    console.log(req.body.o_id)
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

    // console.log(req.body.o_id)
    //     try {
    //                     await Order.updateOne({_id : req.body.o_id},{$set:{status:"Approved"}})

    //                     Order.findById(req.body.o_id,(err,approved_order)=>{
    //                         if(err){
    //                             res.json({status:"error",err})
    //                         }
    //                         console.log(approved_order)
    //                         res.json({status:"ok",data : approved_order})
    //                     })


    //     }catch (error) {

    //         console.log(error)
    //     }
}



const showHiredVendors =async (req,res)=>{

    Order.findOne({_id: req.body.o_id},{sub_orders:1,_id:0},async (err,sub_orders)=>{

                
        try {
                const hired_vendors =  sub_orders.sub_orders.map(async (o_id)=>{
                    const vendor = await CvOrder.findById(o_id)
                    
                    return vendor
                })
                
                Promise.all(hired_vendors).then((hired_vendors)=>{
                    console.log(hired_vendors)
                    res.json({status:"ok",data : hired_vendors})
                })
                
        } catch (error) {
            
                return res.json({status:"Error",error})
        }
    
})
}




module.exports = {signUp,logIn,showProfile,rec_Orders,approveOrder,updateProfile,changePassword,createCatererOrder,createDecorationOrder,createVenueOrder,
                  createPhotographerOrder,rateVendor,searchVendor,searchByDate,caterers,decoration,venue,photographers,myOrders,rejectOrder,showHiredVendors}