const express=require('express');
const proceedRoute= express.Router();
const wishesdata=require('../model/wishesdata');



proceedRoute.get('/' ,function(req,res)
{
    res.render('proceed',{
        uname:""
    }
)
})
proceedRoute.get('/id' ,function(req,res)
{ 
    res.render('proceed')
})

proceedRoute.post("/", function(req,res){
    var item={
        rname:req.body.rname,
        email:req.body.email
    }
    var wish= wishesdata(item);
    wish.save();
    res.render("proceed" ,
    {
      uname:item.rname 
    })
  });
  
module.exports=proceedRoute;