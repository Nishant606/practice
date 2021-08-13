
const express=require('express');
const app=express();
app.get("/",function(req,res){
  res.send("<h1>Hello guys</h1>");
});
app.get("/contact",function(req,res){
  res.send("<h1>Contact me here</h1>");  

});
app.listen(3000,function(){
    console.log('server is running at port 3000');
});
