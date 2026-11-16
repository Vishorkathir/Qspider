
import fs from 'fs'

// read the file

// const dataRead = fs.readFileSync("hello.txt", "utf-8");
// console.log(dataRead);

// const readStream = fs.createReadStream("hello.txt","utf-8");
// console.log(readStream);

const writeStream = fs.createWriteStream("hello3.txt");
writeStream.write("my name is G Vishor \n ");
writeStream.write("Myself Kathir now and i am learnign Node Js");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("completed");
})
writeStream.on("error",(err)=>{
    console.log("error",err);
})


