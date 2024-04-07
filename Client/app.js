const express = require('express')
const app = express();
const database = require('./Database/db.js')
const router = require('./Router/routes.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
database();
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use('/api/',router)
app.use('/',(req,res)=>{
    res.status(200).json({data:`Riya Website`})
})
module.exports = app;