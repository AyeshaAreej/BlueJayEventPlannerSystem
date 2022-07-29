const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    client_name :{
        type: String,
        required: true
    },
    company_name:{
        type: String,
        required: true
    },
    company_pic:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phone_no:{
        type: String,
        required: true
    },
    event_type:{
        type: String,
        required: true
    },
    date:{
        //type: Date,
        type: Number,
        required: true
    },
    no_of_guests:{
        type: Number,
        required: true
    },
    available_budget:{
        type: Number,
        required: true
    },
    venue:{
        type: String,
        default: 'No'
    },
    required_services:{
        type: String
    },
    status: {
        type: String,
        default: 'pending'
    }

});

const  Order = mongoose.model('Order', orderSchema)
module.exports = Order

