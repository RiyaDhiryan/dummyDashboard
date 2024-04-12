require('dotenv').config()
const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')
const {Schema} = mongoose
const userSchema = new Schema({
   name:{
    type:String,
    required:[true,'User name is required']
   },
   email:{
    type:String,
    unique:[true,'Already Registered'],
    required:[true,'Email is required']
   },
   password:{
    type:String,
    select:false
   }
},
{
    timestamps:true
}
);
userSchema.methods ={
    jwtToken(){
        return JWT.sign(
            {id:this._id,email:this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}
const User = mongoose.model('user',userSchema)
module.exports = User