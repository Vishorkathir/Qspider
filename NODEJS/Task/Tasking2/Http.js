// create server  IN JSON RESPONSE


import http from 'http';

const port = 3000;

const server = http.createServer((req,res)=>{


    // res.write("Server wil be running");
    // res.end();



    if(req.url === '/cart' && req.method === "GET"){
        res.writeHead(200,{"content-type":"application/json"});

        let cartcontent = [
            {id:1,name:"vishor",age:20},
            {id:2,name:"Karthicka",age:22},
            {id:3,name:"Kathir",age:24}
        ]

        let personDetails =[
            {id:1,name:"ramu",age:30},
            {id:2,name:"Raju",age:50},
            {id:3,name:"Ramalinga",age:40},
        ]

        res.write((JSON.stringify(cartcontent)));
        res.write((JSON.stringify(personDetails)));
        
        res.end();
    }
    else{
        res.writeHead(404);
        res.write((JSON.stringify({msg:"Some thing is wrong"})))
        res.end();
    }

})

server.listen(port,()=>{
    console.log(`Server will be running now in ${port} `)
})