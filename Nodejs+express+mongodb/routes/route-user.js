//o day chua phuong thuc Restfull API
//khoi tao moi truong express
const express = require('express')

//goi route vao de can truy xuaat file trong routes
const router = express.Router()
//goi doi tuong user can them vao data
const User = require('../module/class-user')
//goi doi tuong jsonwebtoken vao
const jwt = require('jsonwebtoken')
//khoi tao lay body
const bodyParser = require('body-parser');
const { use } = require('./register');
const time = require('connect-timeout')
//
router.route('/homeme')
.post(async function(req,res,next){
    let newname = req.body.name
    let newpass = req.body.pass
    let user = await  User.findOne({name:newname})
    
    if(user === null){
         res.render('login',{message:'tai khoan khong ton tai'})
         return 
    }
    if(user != null && user.name!= newname){
        res.render('login',{message:'kiem tra lai ten dang nhap'})
        return
    }
    if(user.pass != newpass){
        res.render('login',{message:'nhap lai pass'})
        return
    }
    time('5s')
    res.cookie('name',req.body.name)
    res.redirect('/home')
   
  
})
.get((req,res,next)=>{
    let name = req.body.name
   // console.log(name)
})
//
router.post('/h',async(req,res)=>{
   
    let useradd = new User({email:req.body.email,phone:req.body.phone,pass:req.body.pass,name:req.body.name})
    await useradd.save()
    console.log("save done")
    res.redirect("/")
})
//su ly api
router.route('/test')
.get(async function(req,res,next){
  let user = await User.find({})
   res.json(user)  
})
.post(async function(req,res,next){
    let user = await  new User(req.body)
    user.save()
    res.json(user)
}) 

.put( async (req,res,next)=>{
   // let {params,body} = req

   console.log("vao", req.params.id)

    console.log(req.query)

    let user = await User.findById(req.query.id)

    console.log(user)

    return
    // user.set(body)
    res.json(user)
})
// router.post('/',(req,res)=>{
//     const email1 =  req.app.email
//     let user1 = new User({email:req.body.email,phone:req.body.phone,pass:req.body.pass,name:req.body.name})
//     user1.save()
//     console.log(email1)

// })


//const User = require('../module/class-user')
//lay noi dung tren form 

//tao user 1

//tao user2
/*let user2 = new User({email:'kkkkkkk',phone:'45465',pass:'dddjkj',name:'Gai'})
user2.save()*/
//thuc hien jsontoken
// var token = jwt.sign({ name: 'dad' }, 'ddd')
// console.log(token)

//xuat cac noi dung trong file 

module.exports = router