const express = require('express')
const path = require('path')
const routerindex = express.Router()

routerindex.get('/',function(req,res,next){
   let {message1} = req
    res.render("login",{message:message1})
   // res.sendFile(path.join(__dirname,'../','/views','login.html'))
})



module.exports = routerindex