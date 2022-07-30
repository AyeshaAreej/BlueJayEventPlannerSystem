const express = require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/index')

const route = express.Router()

route.post('/signUp', userController.signUp)//done
route.post('/logIn',userController.logIn)//done

//-Home Screen
route.post('/searchCompany',middleware.ValidateToken ,userController.searchCompany) //half done
route.post('/searchByDate',middleware.ValidateToken ,userController.searchByDate)
route.get('/allCompanies',middleware.ValidateToken ,userController.allCompanies)//done
route.post('/topRated',middleware.ValidateToken ,userController.topRated)//half done
route.post('/lowPrice',middleware.ValidateToken ,userController.lowPrice)//half done
route.post('/highPrice',middleware.ValidateToken ,userController.highPrice)//half done

//orders
route.post('/createOrder',middleware.ValidateToken ,userController.createOrder)//done
route.post('/rateCompany',middleware.ValidateToken ,userController.rateCompany)



//-profile
route.get('/showProfile',middleware.ValidateToken ,userController.showProfile)
route.patch('/editProfile',middleware.ValidateToken ,userController.editProfile)
route.patch('/changePassword',middleware.ValidateToken ,userController.changePassword)


//My orders
route.get('/myOrders',middleware.ValidateToken ,userController.myOrders)//done
route.post('/orderDetails',middleware.ValidateToken ,userController.orderDetails)





module.exports = route;