const express = require('express')
const companyController = require('../controllers/companyController')
const middleware = require('../middlewares/index')

const route = express.Router()


//authorization
route.post('/signUp', companyController.SignUp)
route.post('/logIn',companyController.logIn)


//-Home Screen
route.post('/searchVendor',middleware.ValidateToken ,companyController.searchVendor)  
route.post('/searchByDate',middleware.ValidateToken ,companyController.searchByDate) 
route.post('/caterers',middleware.ValidateToken ,companyController.caterers) 
route.post('/decoration',middleware.ValidateToken ,companyController.decoration) 
route.post('/venue',middleware.ValidateToken ,companyController.venue) 
route.post('/photographers',middleware.ValidateToken ,companyController.photographers) 


//orders
route.post('/createOrder',middleware.ValidateToken ,companyController.createOrder) 
route.post('/rateVendor',middleware.ValidateToken ,companyController.rateVendor)


//-profile
route.get('/showProfile',middleware.ValidateToken ,companyController.showProfile)
route.patch('/updateProfile',middleware.ValidateToken ,companyController.updateProfile)
route.patch('/changePassword',middleware.ValidateToken ,companyController.changePassword)


//My orders
route.get('/myOrders',middleware.ValidateToken ,companyController.myOrders)
route.patch('/approveOrder',middleware.ValidateToken ,companyController.approveOrder)
route.post('/orderDetails',middleware.ValidateToken ,companyController.orderDetails)







module.exports = route;