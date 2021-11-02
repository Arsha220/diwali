const express=require('express');
const userRoute= express.Router();
var nodemailer = require('nodemailer');
const wishesdata=require('../model/wishesdata');


userRoute.get("/", function(req,res){
    res.render('user')
});


userRoute.post("/", function(req,res)
{
    var item={
        from:req.body.from, 
        name:req.body.rname,
        mail:req.body.email
    }
    console.log(item);
    var wish= wishesdata(item);
    wish.save();
    
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arshasjeevan75@gmail.com',
        pass: 'chinnusajeevan'
    }
});
const message = {
    from: 'arshasjeevan75@gmail.com', // Sender address
    to:item.mail,     
    subject: "Diwali wishes from "+ item.from,
    text: "Happy Diwali" 
};
transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  res.render('proceed',{uname:item.name});
  }
})

});


 module.exports=userRoute;