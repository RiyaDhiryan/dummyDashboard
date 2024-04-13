const User = require('../Models/UserModel.js')
const ClientModel = require('../Models/ClientSchema.js')
const signUp = async(req,res)=>{
const {name,email,password}= req.body;
try {
   const userInfo = User(req.body)
 const user = await userInfo.save();
return res.status(200).json({
    success:true,
    user
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
const Update = async(req,res)=>{
try {
    const user = await ClientModel.findByIdAndUpdate(req.params.id,req.body)
    return res.status(200).json({
        success:true,
        message:'Data Updated Successfully!',
        user
        
    }) 
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
}
}
const Read = async(req,res)=>{
 try {
    const user = await ClientModel.find({})
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
const getImage = (req,res)=>{
console.log("Get Image");
res.sendFile(`R:/Ecommerce Dashboard/Client/Images/${req.params.imagename}`)
}
const Delete = async(req,res)=>{
 try {
    const userId = req.params.id
    const user = await ClientModel.findByIdAndDelete(userId)
    return res.status(200).json({
        success:true,
        message:'Data Delete Successfully!',
        user
        
    }) 
 } catch (error) {
    res.status(400).json({
                success:false,
                message:error.message
            })
 }
}
module.exports = {
    signUp,
    signIn,
    Delete,
    Update,
    Read,
    getImage
}