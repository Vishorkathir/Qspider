// create server with html Response

import http from "http";

const port = 3000;


const server = http.createServer((req,res)=>{
    

   res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello Server is running</h1> <h1>My name is G Vishor</h1>")
    res.end();



})

server.listen(port,()=>{
    console.log(`The Server is running now in ${port}`);
    
})
