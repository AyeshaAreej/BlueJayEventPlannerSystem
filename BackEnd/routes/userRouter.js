const express = require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/index')

const route = express.Router()

route.post('/signUp', userController.signUp)
route.post('/logIn',userController.logIn)

//-Home Screen
route.get('/searchCompany',middleware.ValidateToken ,userController.searchCompany)
route.get('/searchByDate',middleware.ValidateToken ,userController.searchByDate)
route.get('/allCompanies',middleware.ValidateToken ,userController.allCompanies)
route.get('/topRated',middleware.ValidateToken ,userController.topRated)
route.get('/lowPrice',middleware.ValidateToken ,userController.lowPrice)
route.get('/highPrice',middleware.ValidateToken ,userController.highPrice)
route.post('/createOrder',middleware.ValidateToken ,userController.createOrder)



//-profile
route.get('/showProfile',middleware.ValidateToken ,userController.showProfile)
route.patch('/editProfile',middleware.ValidateToken ,userController.editProfile)
route.patch('/changePassword',middleware.ValidateToken ,userController.changePassword)


//My orders
route.get('/myOrders',middleware.ValidateToken ,userController.myOrders)
route.get('/orderDetails',middleware.ValidateToken ,userController.orderDetails)





module.exports = route;