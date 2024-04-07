const express = require('express')
const { signUp, signIn, Read, Update, Delete } = require('../Controllers/controller')
const Auth = require('../Middleware/Auth.js');
const Router = express.Router()
Router.post('/signup',signUp)
Router.post('/signin',signIn)
Router.get('/read',Read)
Router.put('/update',Update)
Router.delete('/delete',Delete)
module.exports = Router;
