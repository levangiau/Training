const express = require('express')
const path = require('path')
const router = require('./route-user')
const routerindex = express.Router()


routerindex.get('login',(req,res,next)=>{
    console.log(req.name)
})
routerindex.get('/',function(req,res,next){

    res.render('home',{name:req.cookies.name})
    //res.sendFile(path.join(__dirname,'../','/views','home.html'))
})

module.exports = routerindex