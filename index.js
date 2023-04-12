// console.log("Hello");
const fs=require("fs");
const express =require("express");

  const app=express()
  app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello");
})

// app.post("/adddata",(req,res)=>{
//     console.log(req.body)
//     res.end("accepted data")
// })


// app.post("/addStudent",(req,res)=>{
//     fs.writeFileSync("./students.txt",JSON.stringify(req.body),"utf-8")
//     res.send("accepted data");
// })

// app.get("/students",(req,res)=>{
//     const data=fs.readFileSync("./students.txt","utf-8")
//     res.send(data);
// })

// CRUD
app.get("/students",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    // console.log(data);

    const parsed_data=JSON.parse(data)
    const student=parsed_data.studends
    console.log(student)
    // console.log("in Progress..")
    res.send(student)
})

app.post("/enterStudents",(req,res)=>{
    const studends=req.body;
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    parsed_data.studends.push(studends)
    // console.log(parsed_data)
    const newData=JSON.stringify(parsed_data)
    console.log(newData)
    fs.writeFileSync("./db.json",newData)
    res.send("Thanks")
})


  app.listen(7000,()=>{
    console.log("Listening on port 7000")
  })