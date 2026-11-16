import express from 'express';
const app= express();

app.use(express.json());

// GET
 let studentDetails = [
    {id:1,name:"vishor",age:22},
    {id:2,name:"Kathir",age:29}

]

app.get("/student",(req,res)=>{
    // res.send("Student fetch Successfully");
    res.json(studentDetails);
    console.log("value got")
})

app.get("/student/:id",(req,res)=>{
    const student = studentDetails.find(s=>s.id===Number(req.params.id))
    if(!student){
        return res.status(404).json({msg:"invalid id"})
    }
    res.json(student)
})


// POST

app.post('/student',(req,res)=>{
    const {id,name,age} = req.body;
    
    const student={
        id:studentDetails.length+1,
        name:name,
        age:age
    }
    studentDetails.push(student);
    res.status(201).json({msg:"successfully store!!"})

    
})


// PUT

app.put("/student/:id",(req,res)=>{
    // const {name,age}=req.body;

    const verifyStudent = studentDetails.find(s=>s.id===Number(req.params.id))

    if(!verifyStudent){
        return res.status(404).json({msg:"invalid id"})
    } else{

    verifyStudent.name = req.body.name;
    verifyStudent.age =req.body.age;
    // res.json(studentDetails);
    res.status(200).json({msg:"successfully updated"})
    }
})


// PATCH

app.patch("/student/:id",(req,res)=>{
    const {name,age} = req.body;

    const updateStudent = studentDetails.find(s=>s.id===Number(req.params.id))
    
    if(!updateStudent){
        return res.status(404).json({msg:"invalid id"})
    }
    if(name!== undefined){
        updateStudent.name = name;
    }
    if(age!==undefined){
        updateStudent.age=age;
    }

    res.status(200).json({msg:"successfully patched"})
})


// DELETE


app.delete("/student/:id",(req,res)=>{
    const deleteStudent = studentDetails.findIndex(s=>s.id===Number(req.params.id))

    if(deleteStudent === -1){
        return res.status(404).json({msg:'it is Invalid id'})
    }

    studentDetails.splice(deleteStudent);
    res.status(200).json({msg:'Successfully deleted!'})
})






app.listen(3000,()=>{
    console.log("Server will be running.......")
})