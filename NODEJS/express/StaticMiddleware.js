import express from 'express';

const app = express();

app.use(express.static("public"));  //access the static file from public folder

app.listen(3000, () => {
    console.log("Server is running now in port 3000")
})