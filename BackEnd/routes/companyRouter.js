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
route.post('/createCatererOrder',middleware.ValidateToken ,companyController.createCatererOrder) //done
route.post('/createDecorationOrder',middleware.ValidateToken ,companyController.createDecorationOrder)//done
route.post('/createVenueOrder',middleware.ValidateToken ,companyController.createVenueOrder)//done
route.post('/createPhotographerOrder',middleware.ValidateToken ,companyController.createPhotographerOrder)//done
route.post('/rateVendor',middleware.ValidateToken ,companyController.rateVendor)


//-profile
route.get('/showProfile',middleware.ValidateToken ,companyController.showProfile)
route.patch('/updateProfile',middleware.ValidateToken ,companyController.updateProfile)
route.patch('/changePassword',middleware.ValidateToken ,companyController.changePassword)


//My orders
route.get('/myOrders',middleware.ValidateToken ,companyController.myOrders)//done
route.get('/rec_Orders',middleware.ValidateToken ,companyController.rec_Orders) //done
route.patch('/approveOrder',middleware.ValidateToken ,companyController.approveOrder) //done
route.patch('/rejectOrder',middleware.ValidateToken ,companyController.rejectOrder) 
route.post('/showHiredVendors',middleware.ValidateToken ,companyController.showHiredVendors)





module.exports = route;