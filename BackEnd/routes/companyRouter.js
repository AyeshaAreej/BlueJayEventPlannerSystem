const express = require('express')
const companyController = require('../controllers/companyController')
const middleware = require('../middlewares/index')

const route = express.Router()


route.post('/signUp', companyController.SignUp)
route.get('/logIn',companyController.logIn)


//-profile
route.get('/showProfile',middleware.ValidateToken ,companyController.showProfile)


//My orders
route.get('/myOrders',middleware.ValidateToken ,companyController.myOrders)
route.patch('/approveOrder',middleware.ValidateToken ,companyController.approveOrder)



module.exports = route;