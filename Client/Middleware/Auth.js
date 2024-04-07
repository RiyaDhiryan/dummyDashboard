require('dotenv').config()
const JWT = require('jsonwebtoken')
const Auth = (req,res,next)=>{
    const token = (req.cookies && req.cookies.token) || null
    if(!token){
        return res.status(200).json({
            success:false,
            message:'Not Authorised'
        })
    }
    try {
        const payload = JWT.verify(token,process.env.SECRET)
        req.user ={id:payload.id,email:payload.email}
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:error.message
        })
    }
    next();

}
module.exports = Auth;