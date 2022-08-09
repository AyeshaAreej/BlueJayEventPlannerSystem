const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customer_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    customer_name :{
        type: String,
        required: true
    },
    company_id:{
        type: mongoose.Schema.Types.ObjectId,
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
        type: String,
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
        default: 'No',
        required: true
    },
    required_services:{
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    }

});

const  Order = mongoose.model('Order', orderSchema)
module.exports = Order

