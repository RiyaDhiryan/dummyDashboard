require('dotenv').config()
const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')
const {Schema} = mongoose
const ClientSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true
    },
    file:{
        type:String,
        required:[true,'Image is required']
       },
    description:{
        type:String,
        required:[true,'Description is required']
       },
    price:{
        type:String,
        required:[true,'Price is required']
       }
},
{
    timestamps:true
}
)
const ClientModel = mongoose.model("client",ClientSchema)
module.exports = ClientModel;