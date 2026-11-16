import express from "express"
const app= express();


// some operation next is use to access the next function step by step

// function demo1(req,res,next){
//     console.log("Middleware one");
//     next()
// }

// function demo2(req,res,next){
//     console.log("Middleware two");
//     next()
// }
// function demo3(req,res,next){
//     console.log("Middleware three");
//     next()
// }
// function demo4(req,res,next){
//     console.log("Middleware four");
//     next()
// }

// app.use(demo1,demo2,demo3,demo4);

app.use((req,res,next)=>{
    console.log("middleware one");
    next()
})
app.use((req,res,next)=>{
    console.log("middleware two");
    next()
})
app.use((req,res,next)=>{
    console.log("middleware three");
    next()
})
app.use((req,res,next)=>{
    console.log("middleware four");
    next()
})

app.get('/profile',(req,res)=>{
    res.send("Profile fetch Successfully");

})

app.listen(3000,()=>{
    console.log("running")
})