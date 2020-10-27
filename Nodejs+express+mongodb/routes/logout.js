const express = require('express')
const path = require('path')
const routerindex = express.Router()

routerindex.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname,'../','/views','logout.html'))
})

module.exports = routerindex