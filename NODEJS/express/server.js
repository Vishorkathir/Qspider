import express from "express"

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hi Server");
//     console.log(req.method);
//     console.log(req.url);

// })


// app.get('/home',(req,res)=>{
//     res.send("Hello HomePage");
// })

// app.get("/cart",(req,res)=>{
//     res.send("Hello this is cartPage");
// })

// app.get("/about",(req,res)=>{
//     res.send("Hello this is AboutPage")
// })



// ROUTE PARAMETERS

// single Parameter

// app.get('/student/:id',(req,res)=>{
//     const id = req.params.id;
//     res.send(` Student with id ${id}`);
// })

// multiple Parameter

app.get('/student/:id/:name',(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(` My name is ${name} with id ${id}`);
})



// QUERY PARAMETER 

// single query

// app.get('/student',(req,res)=>{
//     const city = req.query.city;
//     res.send(`Student from city ${city}`);

// })

// multiple Query

// app.get('/student',(req,res)=>{
//     const name = req.query.name;
//     const city = req.query.city;
//     res.send(`My name is ${name} from city ${city}`);

// })


app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})