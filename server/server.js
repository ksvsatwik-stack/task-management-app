const express=require("express");

const app=express();

const PORT=3000;

app.use(express.json());

let tasks=[];

app.get("/tasks",(req,res)=>{
res.json(tasks);
});

app.post("/tasks",(req,res)=>{
tasks.push(req.body);
res.json({message:"Task Added"});
});

app.listen(PORT,()=>{
console.log("Server Running on Port "+PORT);
});
