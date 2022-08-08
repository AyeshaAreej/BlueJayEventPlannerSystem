const express = require('express')
const vendorController = require('../controllers/vendorController')
const middleware = require('../middlewares/index')

const route = express.Router()


//authorization
route.post('/signUp', vendorController.SignUp)
route.post('/logIn',vendorController.logIn)


//-profile
route.get('/showProfile',middleware.ValidateToken ,vendorController.showProfile)
route.patch('/updateProfile',middleware.ValidateToken ,vendorController.updateProfile)
route.patch('/changePassword',middleware.ValidateToken ,vendorController.changePassword)


//My orders
route.get('/myOrders',middleware.ValidateToken ,vendorController.myOrders)
route.patch('/approveOrder',middleware.ValidateToken ,vendorController.approveOrder)
route.post('/orderDetails',middleware.ValidateToken ,vendorController.orderDetails)



module.exports = route;