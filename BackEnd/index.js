const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const userRouter = require('./routes/userRouter')
const companyRouter = require('./routes/companyRouter')
const vendorRouter = require('./routes/vendorRouter')
const db = require('./config/mongoose')
const middleware = require('./middlewares/index')
const User = require('./models/userSchema')
const Company = require("./models/companySchema")
const Vendor = require('./models/vendorSchema')
const cors = require("cors")

require('dotenv').config();
const corsOptions = {
    origin:"*",
    credentials:"true",
    optionSuccessStatus:200
}

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,'assets')))

app.get('/',middleware.ValidateToken,async (req,res)=>{

    
    //role add token and if else
    const role = req.user.role
    console.log(role)
    
    switch(role){

        case 'customer':
             User.findById(req.user.id,(err,user)=>{
                if(err){
                    return res.json({status:'error', error: 'cant find user' })
                }
              return res.json({ status:'ok', data: user})
            })
            break;

        case 'company':
             Company.findById(req.user.id,(err,user)=>{
                if(err){
                    return res.json({status:'error', error: 'cant find user' })
                }
              return res.json({ status:'ok', data: user})
            })
            break;

        case 'vendor':
                Vendor.findById(req.user.id,(err,user)=>{
                   if(err){
                       return res.json({status:'error', error: 'cant find user' })
                   }
                 return res.json({ status:'ok', data: user})
            })
            break;
        
  
    }
}
)



//routes
app.use('/users', userRouter)
app.use('/company', companyRouter)
app.use('/vendor', vendorRouter)



app.listen(5000,(err)=>{
    if(err){
        console.log('error on port')
    }else{
        console.log('app running successfully on port', 5000)
    }
})