const express = require("express");
const app=express();
app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
    console.log("hii");
    //res.status(500).send("hello")
    //res.status(200).send({error:"error message"})
    //res.json({express:"learning express"})
    //res.send("hello world!");
    //res.render('index.ejs',{text:"haii"});
    res.send("hi");
    
});

const userRoute=require("./routes/user")
app.use('/user',userRoute)
app.listen(3000);