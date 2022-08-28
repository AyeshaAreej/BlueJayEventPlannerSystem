const express = require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/index')

const route = express.Router()

//authorization
route.post('/signUp', userController.signUp)//done
route.post('/logIn',userController.logIn)//done

//-Home Screen
route.post('/searchCompany',middleware.ValidateToken ,userController.searchCompany) //done
route.post('/searchByDate',middleware.ValidateToken ,userController.searchByDate)//done
// route.post('/allCompanies',middleware.ValidateToken ,userController.allCompanies)//done
route.post('/topRated',middleware.ValidateToken ,userController.topRated)//done
route.post('/lowPrice',middleware.ValidateToken ,userController.lowPrice)//done
route.post('/highPrice',middleware.ValidateToken ,userController.highPrice)//done

//orders
route.post('/createOrder',middleware.ValidateToken ,userController.createOrder)//done
route.post('/rateCompany',middleware.ValidateToken ,userController.rateCompany)
route.patch('/cancelOrder',middleware.ValidateToken ,userController.cancelOrder)//done




//-profile
route.patch('/updateProfile',middleware.ValidateToken ,userController.updateProfile)//done
route.patch('/changePassword',middleware.ValidateToken ,userController.changePassword)//done


//My orders
route.get('/myOrders',middleware.ValidateToken ,userController.myOrders)//done





module.exports = route;