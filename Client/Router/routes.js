const express = require('express')
const { signUp, signIn, Read,Multer,getImage } = require('../Controllers/controller')
// const Auth = require('../Middleware/Auth.js');
// const upload = require('../Middleware/multer.js')
const Router = express.Router()
Router.post('/signup',signUp)
Router.post('/signin',signIn)
Router.get('/read',Read)
// Router.post('/addata',upload,Multer)
Router.get('/getimage/:imagename',getImage)
// Router.put('/update',Update)
// Router.delete('/delete',Delete)
// Router.post('/create',create)
module.exports = Router;
