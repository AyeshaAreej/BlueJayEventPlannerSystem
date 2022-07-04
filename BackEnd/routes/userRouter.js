const express = require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/index')

const route = express.Router()

route.post('/signUp', userController.signUp)
route.post('/logIn',userController.logIn)

//-Home Screen
route.post('/searchCompany',middleware.ValidateToken ,userController.searchCompany)
route.post('/searchByDate',middleware.ValidateToken ,userController.searchByDate)
route.post('/allCompanies',middleware.ValidateToken ,userController.allCompanies)
route.post('/topRated',middleware.ValidateToken ,userController.topRated)
route.post('/lowPrice',middleware.ValidateToken ,userController.lowPrice)
route.post('/highPrice',middleware.ValidateToken ,userController.highPrice)

//orders
route.post('/createOrder',middleware.ValidateToken ,userController.createOrder)
route.post('/rateCompany',middleware.ValidateToken ,userController.rateCompany)



//-profile
route.get('/showProfile',middleware.ValidateToken ,userController.showProfile)
route.patch('/editProfile',middleware.ValidateToken ,userController.editProfile)
route.patch('/changePassword',middleware.ValidateToken ,userController.changePassword)


//My orders
route.get('/myOrders',middleware.ValidateToken ,userController.myOrders)
route.post('/orderDetails',middleware.ValidateToken ,userController.orderDetails)





module.exports = route;