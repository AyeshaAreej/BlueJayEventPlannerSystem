const express = require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/')

const route = express.Router()

route.post('/signUp', userController.SignUp)
route.get('/UE',userController.UE)
route.get('/logIn',userController.logIn)
route.get('/home',middleware.ValidateToken ,userController.homescreen)

module.exports = route;