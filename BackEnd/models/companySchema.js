const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    company_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    phone_no:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    services:{
        type: String,
        required: true
    },
    price_range:{
        type: Number,
        min: 0,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    available_hours:{
        type: String,
        required: true
    },
    rating:[Number],

    orders:[
        {
            order:{
                type: String,
                required: true
            }
        }
    ]
},
{
    collection:'company_info'
});

const  Company = mongoose.model('Company', companySchema)
module.exports = Company

