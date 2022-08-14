const express = require('express')
const companyController = require('../controllers/companyController')
const middleware = require('../middlewares/index')

const route = express.Router()


//authorization
route.post('/signUp', companyController.signUp) //done
route.post('/logIn',companyController.logIn)//done


//-Home Screen
route.post('/searchVendor',middleware.ValidateToken ,companyController.searchVendor)  //done
route.post('/searchByDate',middleware.ValidateToken ,companyController.searchByDate) //done
route.post('/caterers',middleware.ValidateToken ,companyController.caterers) //done
route.post('/decoration',middleware.ValidateToken ,companyController.decoration) //done
route.post('/venue',middleware.ValidateToken ,companyController.venue) //done
route.post('/photographers',middleware.ValidateToken ,companyController.photographers) //done


//orders
route.post('/createOrder',middleware.ValidateToken ,companyController.createOrder) 
route.post('/rateVendor',middleware.ValidateToken ,companyController.rateVendor)


//-profile
route.get('/showProfile',middleware.ValidateToken ,companyController.showProfile)
route.patch('/updateProfile',middleware.ValidateToken ,companyController.updateProfile)
route.patch('/changePassword',middleware.ValidateToken ,companyController.changePassword)


//My orders
route.get('/rec_Orders',middleware.ValidateToken ,companyController.rec_Orders) //done
route.patch('/approveOrder',middleware.ValidateToken ,companyController.approveOrder) 
route.get('/myOrders',middleware.ValidateToken ,companyController.myOrders)//done






module.exports = route;