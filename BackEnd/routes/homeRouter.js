const express = require('express')
//const homeController = require('../controllers/homeController')
const userRouter = require('./userRouter')

const route = express.Router()

route.use('/users', userRouter)

module.exports = route;