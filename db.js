const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://baladhanush1911:bala1900@balame.6zn3pp4.mongodb.net/BMCars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
