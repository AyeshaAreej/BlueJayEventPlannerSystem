const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const userRouter = require('./routes/userRouter')
const companyRouter = require('./routes/companyRouter')
const db = require('./config/mongoose')
const middleware = require('./middlewares/index')
const User = require('./models/userSchema')
const Company = require("./models/companySchema")

require('dotenv').config();

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,'assets')))

app.get('/',middleware.ValidateToken,async (req,res)=>{

    //role add token and if else
    const role = req.user.role

    switch(role){

        case 'customer':
            await User.findById(req.user.id,(err,user)=>{
                if(err){
                    return res.json({status:'error', error: 'cant find user' })
                }
              return res.json({ status:'ok', data: user})
            })
            break;

        case 'company':
            await Company.findById(req.user.id,(err,user)=>{
                if(err){
                    return res.json({status:'error', error: 'cant find user' })
                }
              return res.json({ status:'ok', data: user})
            })
            break;
        break;
    }
}
)



//routes
app.use('/users', userRouter)
app.use('/company', companyRouter)



app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('error on port')
    }else{
        console.log('app running successfully on port', process.env.PORT)
    }
})