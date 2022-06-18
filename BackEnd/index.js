const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter')
const db = require('./config/mongoose')

require('dotenv').config();

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,'assets')))
app.use(homeRouter)
app.use(userRouter)

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('error on port')
    }else{
        console.log('app running successfully on port', process.env.PORT)
    }
})