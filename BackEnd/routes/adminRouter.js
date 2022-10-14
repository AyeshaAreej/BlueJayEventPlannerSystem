const express = require('express')
const adminController = require('../controllers/adminController')
const middleware = require('../middlewares/index')

const route = express.Router()


//authorization
route.post('/signUp', adminController.signUp)
route.post('/logIn',adminController.logIn)//done


// //-Home Screen

route.patch('/acceptCompany',middleware.ValidateToken ,adminController.acceptCompany)//done
route.patch('/rejectCompany',middleware.ValidateToken ,adminController.rejectCompany)//done
route.patch('/changePassword',middleware.ValidateToken ,adminController.changePassword)//done
route.get('/getNewRegs',middleware.ValidateToken ,adminController.getNewRegs)//done





module.exports = route;