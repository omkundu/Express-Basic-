// console.log("Hello");
const fs=require("fs");
const express =require("express");

  const app=express()
  app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello");
})

app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.end("accepted data")
})


app.post("/addStudent",(req,res)=>{
    fs.writeFileSync("./students.txt",JSON.stringify(req.body),"utf-8")
    res.send("accepted data");
})

app.get("/students",(req,res)=>{
    const data=fs.readFileSync("./students.txt","utf-8")
    res.send(data);
})

  app.listen(7000,()=>{
    console.log("Listening on port 7000")
  })