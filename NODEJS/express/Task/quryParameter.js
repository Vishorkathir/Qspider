import express from "express"

const app = express();

app.get("/customer",(req,res)=>{
    const product = req.query.product;
    const price = req.query.price;

    res.send(`The product name is ${product} and the Price is rs ${price}`);
})


app.listen(3000,()=>{
    console.log(`Server is running in 3000 port`)
})