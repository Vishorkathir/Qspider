// Node.js script


// inbuilt Modules

// const fs = require('fs')  => commonjs (old)

import fs from "fs"

// const dataWrite=fs.writeFileSync("studentDetails.txt","Vishor ,Kathir ,Karthiga, GowthamRaja ");
// // fs.write("hi hello")
// // fs.end()

// console.log("file created Successfully!")



// readfiles

// fs.readFile("studentDetails.txt","utf-8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data);
//     }
// })


// Append  Files

const data1 = fs.writeFileSync("data1.txt","hello I am Vishor and .....");
const data2 = fs.writeFileSync("data2.txt","Raja is friend of Rani ")

fs.appendFile(data1,data2,(err,data)=>{
    if(err){
        throw err;
    }
    else{
        console.log("data will be appended!");
    }
});


