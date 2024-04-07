const mongoose = require('mongoose')
const database = ()=>{
    mongoose
    .connect('mongodb://127.0.0.1:27017/Ecommerce-dashboard')
    .then((conn)=>console.log(`Connected to database:${conn.connection.host}`))
    .catch((err)=>console.log(err.message))
}
module.exports = database;