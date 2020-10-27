const express =  require('express')
const app = express()
const port = 3004
// tao moi truong path
const path = require('path')
//cai moi truong restfull API
const axios = require('axios')
//tao moi truong mongoose
const mongoose = require('mongoose')
//cai moi truong lay body
const bodyParser = require('body-parser');
//tao mot lop doi tuong
const User = require('../testRegisterpage/module/class-user')
//call timeout
const timeout = require('connect-timeout')
//cai dat express-sesion: npm install express-session and tao moi truong
//cai
// const hbs = require('handlebars')
// cai view ejs
app.set('view engine', 'ejs');
//set up view engie
app.set('index',path.join(__dirname,'views'))
//tao con tro vao public nhung file trong public se duoc chi dinh
app.use(express.static(path.join(__dirname,'public')))
//app.use(express.json())
//app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setup timeour
app.use(timeout('5s'))
//set cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//khoi tao router khi de dung
const registerrouter = require('../testRegisterpage/routes/register')
const routeuser = require('../testRegisterpage/routes/route-user')
const logoutrouer = require('./routes/logout')
const homerouter = require('../testRegisterpage/routes/home')
const loginrouter = require('../testRegisterpage/routes/login')



//su dung cai router vua khoi tao
app.use('/',loginrouter)
app.use('/route',routeuser)
app.use('/logout',logoutrouer)
app.use('/home',homerouter)
app.use('/register',registerrouter)
//lam viec voi api
// const get=(async(req,res)=>{
//    await axios.get('http://localhost:3004/route/test')
//     .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (e) {
//         console.log(e.message);
//       });
// })

//get()
//su dung session
// app.use(function(req, res, next){
//     var err = req.session.error;
//     var msg = req.session.success;
//     delete req.session.error;
//     delete req.session.success;
//     res.locals.message = '';
//     if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
//     if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
//     next();
//   });
//lay du lieu tai form
// app.post('/home',async (req,res)=>{
//     const user = await User.findOne({ name: req.body.name })
//     if (user === null) {
//        return res.render('/home',{message:'khong ton tai'})
//         // user ko ton tai
       
     
//     } else if (user.pass === req.body.pass) {
//         // dang nhap thanh cong
//        // return res.render('/home',{ message:'dang nhap thanh cong'})
//         res.redirect('/home')
        
//     } else {
//         // sai mat khau
//         return res.render('/home',{message:'sai pass hoac user'})
//         console.log("sai mat khau")
//     }
   
//     /*if(req.body.name == User.findOne({name:req.body.name})){
//         res.redirect("/home")
//     }
//     else{
//         res.json("nhap sai xin nhap lai")
//     }*/
   

// })



//khoi tao mongoose cho len server
mongoose.connect('mongodb://localhost:27017/resgiser',{useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connect done!!!!!!')
})
.catch((err)=>{
    console.log('can`t not connect!!!!',err)
    process.exit()
})
//de sever hien thi tren port
app.listen(port,()=>{
    console.log("listen :" + port)
})