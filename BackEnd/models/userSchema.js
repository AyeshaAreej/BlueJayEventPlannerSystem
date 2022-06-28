const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
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
    role:{
        type: String
    },
    orders:[
        {type: mongoose.Schema.Types.ObjectId, ref:'Order'}
    ]
    
});

const  User = mongoose.model('User', userSchema)
module.exports = User

