const express = require('express')
const app = express();
const database = require('./Database/db.js')
const router = require('./Router/routes.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const ClientModel = require('./Models/ClientSchema.js')
const multer = require('multer')
const path = require('path')
database();
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use('/api/',router)

// add image 

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
}).single('file')
app.post('/addata',upload,(req,res)=>{
    console.log(req.body);
//    const {name,price,description} = req.body;
const name = req.body.name;
const price = req.body.price;
const description=req.body.description
   const image = req.file.filename;
   console.log(image)
   try {
    ClientModel.create({name:name,price:price,description:description , file:image})
    res.status(200).json({
        success:true,
        message:"Form Uploaded Successfully!"
    })
   } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
   }
})
app.use('/',(req,res)=>{
    res.status(200).json({data:`Riya Website`})
})
module.exports = app;