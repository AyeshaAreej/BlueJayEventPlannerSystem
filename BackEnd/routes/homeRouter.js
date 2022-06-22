const express = require('express')
//const homeController = require('../controllers/homeController')
const userRouter = require('./userRouter')
const companyRouter = require('./companyRouter')

const route = express.Router()

route.use('/users', userRouter)
route.use('/company', companyRouter)

module.exports = route;