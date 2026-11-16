
import http from 'http';
const port = 3000;

const server = http.createServer((req,res)=>{   //create a server


    // res.writeHead(200,{"content-type":"text/plain"})

    // // res.write("hello server");

    // //this is call end or last response from server
    // res.end("hello");





    // if(req.url==="/about"){
    //     res.write("Welcome to about page")
    //     res.end();
    // }
    // else if(req.url === '/cart'){
    //     res.write("welcome to cart page ");
    //     res.end();
    // }
    // else if(req.url === '/contact'){
    //     res.write("Welcome to Contact page");
    //     res.end();
    // }
    // else{
    //     res.write("Page not found");
    //     res.end();  
    // }



    //  HTML RESPONSE

    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("<h1>Hello Server</h1>");
    // res.end();

    // JSON RESPONSE    

    // let obj = {
    //     id:1,
    //     name:"vishor",
    //     age:10
    // }
    // res.write(JSON.stringify(obj));    //object into string
    // res.end();


    
    if(req.url === "/student" && req.method ==="GET"){
        res.writeHead(200,{"content-type":"application/json"})
        let obj = [
            {id:1,name:"vishor",age:20},
            {id:2,name:"vishor",age:20},
            {id:3,name:"vishor",age:20},
        ]

        res.end(JSON.stringify(obj))
    }
    else{
        res.writeHead(404);
        res.end(JSON.stringify({msg:"Page not found"}));
    }




});

server.listen(port,()=>{  //listen the port
    console.log(`server is running successfully in ${port}`)
})