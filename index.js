// console.log("Hello");

const express =require("express");

  const app=express()

app.get("/",(req,res)=>{
    res.end("hello");
})

// app.post("/adddetails",(req,res)=>{
//     res.end("accepted data")
// })




  app.listen(7000,()=>{
    console.log("Listening on port 7000")
  })