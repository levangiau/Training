const { render } = require('ejs');
const express = require('express')
const router = require('../routes/route-user')
exports.engine = 'ejs';

exports.home=function(){
    router.get('/homeme',(req,res,next)=>{
       
       res.render('/home',{name:req.name})
    }) 
}