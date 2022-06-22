const express = require('express')
const companyController = require('../controllers/companyController')
const middleware = require('../middlewares/')

const route = express.Router()



route.get('/UE',companyController.UE)
route.post('/signUp', companyController.SignUp)
route.get('/logIn',companyController.logIn)



module.exports = route;