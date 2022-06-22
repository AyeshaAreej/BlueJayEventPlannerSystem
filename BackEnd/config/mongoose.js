const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/bluejay-db')

const db = mongoose.connection

db.on('error',()=>{
    console.log('error in connecting to db')
})

db.once('open',()=>{
    console.log('successfully connected to database')
})

module.exports = mongoose