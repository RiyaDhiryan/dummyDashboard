const User = require('../Models/UserModel.js')
const signUp = async(req,res)=>{
const {name,email,password}= req.body;
try {
   const userInfo = User(req.body)
 const result = await userInfo.save();
return res.status(200).json({
   
    success:true,
    result
}) 
} catch (error) {
    return res.status(400).json({
     success:false,
     message:error.message
    }) 
}



}
const signIn = async(req,res)=>{
const {email,password} = req.body;
if(!email || !password){
    return res.status(400).json({
        success:false,
        message:"Please fill all Field"
       }) 
}
try {
  const user = await User
.findOne({
    email
})
.select('+password')
if(!user || user.password !== password){
    return res.status(400).json({
        success:false,
        message:"Invaid Credentials"
       }) 
}  
const token = user.jwtToken();
user.password = undefined;
const cookieOption ={
    maxAge:24*60*60*1000,
    httpOnly:true
}
res.cookie("token",token,cookieOption)
return res.status(200).json({
   
    success:true,
    message:'User login Successfully!',
    user
    
}) 
} catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
       }) 
}
}


const Update = async()=>{

}
const Read = async(req,res)=>{
    // const Read = async(req,res)=>{
//  const userId = req.user.id
 try {
    // const user = await User.findById(userId)
    const user = await User.find({})
    return res.status(200).json({
        success:true,
        message:'User Data',
        user
        
    }) 
 } 
 catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
       }) 
}
}


 

const Delete = async()=>{

}


module.exports = {
    signUp,
    signIn,
    Update,
    Delete,
    Read
}