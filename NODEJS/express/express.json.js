import express from "express";
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("1.College security : req recieved");
    next()
})

app.use((req, res, next) => {
    console.log("2.logging student activity")
    console.log(req.method);
    console.log(req.url);
    next()
})

app.post("/profile", (req, res, next) => {
    console.log("Fetching student data profile");
    console.log(req.body);
    res.status(200).json({ msg:"good request",data:req.body })
})

app.listen(3000, () => {
    console.log("Server is running now in port 3000")
})
