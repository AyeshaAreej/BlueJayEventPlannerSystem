const mongoose = require('mongoose')

const cvOrderSchema = new mongoose.Schema({
    company_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    company_name :{
        type: String,
        required: true
    },
    vendor_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    vendor_name:{
        type: String,
        required: true
    },
    vendor_pic:{
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
        default: 'No'
    },
    required_service:{
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    }

});

const  CvOrder = mongoose.model('CvOrder', cvOrderSchema)
module.exports = CvOrder

