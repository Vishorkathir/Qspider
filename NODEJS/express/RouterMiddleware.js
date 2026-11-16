import express from 'express';
const app=express();

const router=express.Router();

router.use((req,res,next)=>{
    const adminKey = req.headers["admin-key"];
    if(adminKey!== "admin@123"){
        console.log("error");
        return res.status(401).json({msg:"invalid key"})
    }
    
    console.log("Successfully key");
    // res.status(201).json({msg:"success"})
    next();
    
})


router.get("/students",(req, res) => {
  res.json({
    msg: "student data fetch successfully",
    data: ["vishor", "vishal", "vishnu"]
  });
});
router.get("/courses",(req, res) => {
  res.json({
    msg: "student data fetch successfully",
    data: ["MERN", "JAVA", "JAVASCRIPT"]
  });
});



app.use("/admin",router);

app.listen(3000,()=>{
    console.log("running successfully");
})

