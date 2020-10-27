const express = require('express')
const path = require('path')
const routerindex = express.Router()

routerindex.get('/',function(req,res,next){
    res.render('register')
    //res.sendFile(path.join(__dirname,'../','/views','register.html'))
})

module.exports = routerindex