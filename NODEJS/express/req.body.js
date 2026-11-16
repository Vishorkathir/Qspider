import express from "express"









const app = express();

app.use(express.json());


app.post("/student",(req,res)=>{
    console.log(req.body);

    res.status(201).json({  
        msg:"Student Created",
        data:req.body

    })
})

app.listen(3000,()=>{
    console.log("server is running")
})