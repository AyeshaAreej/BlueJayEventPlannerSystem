const express = require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/')

const route = express.Router()


route.get('/UE',middleware.ValidateToken ,userController.UE)
route.post('/signUp', userController.SignUp)
route.get('/logIn',userController.logIn)

//1-Home Screen
route.get('/searchCompany',middleware.ValidateToken ,userController.searchCompany)
route.get('/allCompanies',middleware.ValidateToken ,userController.allCompanies)
route.get('/topRated',middleware.ValidateToken ,userController.topRated)
route.get('/lowPrice',middleware.ValidateToken ,userController.lowPrice)
route.get('/highPrice',middleware.ValidateToken ,userController.highPrice)

//2-profile
route.get('/showProfile',middleware.ValidateToken ,userController.showProfile)


//3-Signout
route.get('/signOut',middleware.ValidateToken ,userController.signOut)




module.exports = route;