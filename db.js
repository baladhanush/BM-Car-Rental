const mongoose = require("mongoose");
const { mongoURI } = require('./config');

function connectDB(){
    mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successful');
    });

    connection.on('error', (err) => {
        console.error('Mongo DB Connection Error:', err);
    });
}

module.exports = connectDB;
