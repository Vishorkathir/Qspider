import express from "express";

const app= express();




app.use((req,res,next)=>{
    console.log("1.College security : req recieved");
    next()
})

app.use((req,res,next)=>{
    console.log("2.logging student activity")
    console.log(req.method);
    console.log(req.url);

    next()
})

function checkedUser (req,res,next){
    console.log("checking student Id");
    let studentId = "Stu101";
    if(studentId === "Stu101"){
        console.log("Student Present");
        next()
    }
    else{
        return res.status(403).json({
            msg:"student access decline"
        })
    }
}


app.get("/profile",checkedUser,(req,res,next)=>{
    console.log("Fetching student data profile");
    res.json({
        id:"101",
        name:"vishor",
        student:"yes",
        status:"active"
    })
})

app.listen(3000,()=>{
    console.log("Server is running now in port 3000")
})

