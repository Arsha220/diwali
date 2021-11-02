const express = require('express');
var nodemailer = require('nodemailer');
const router=express.Router();
const app = new express();
const port = process.env.PORT || 5550;

const wishesdata = require('./src/model/wishesdata');

app.use(express.urlencoded({extended:true}));
const proceedRoute=require('./src/routes/proceedRoute');
const userRoute= require('./src/routes/userRoute')
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views', './src/views');

app.use("/user", userRoute);
app.use("/proceed",proceedRoute);

app.get('/',(req,res)=>{
    res.render("index");
 });


app.listen(port,()=>{console.log(`Server Ready at ${port}`)});