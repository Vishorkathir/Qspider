// inbuilt Module


// readFiles

import fs, { appendFile } from 'fs';


// // synchronus file
// const data = fs.readFileSync('abc.txt','utf-8');
// console.log(data);

// console.log


// write file

// // Synchronus file
// const createFile = fs.writeFileSync('hello.txt',"hello my name is kathir and created file");
// console.log(createFile);



// // Asysnchronus file

// const createFIleAsyn = fs.writeFile("hello1.txt","hello ama asynchronus file",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(createFIleAsyn);
        
//     }
// })

// console.log("end");



// append

// const data = fs.appendFile('abc.txt',"hello vaakkam am a append with abc.text",(err,data)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("the text will be added!",data);
//     }
// })



// // Unlink



// const UnlinkData = fs.unlink("hello1.txt",(err,data)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("File Deleted Succcessfully!")
//     }
// });





// task



// const data = fs.writeFileSync("abcd.txt","helloo world my name is g vishor");
// console.log("writed")

// const dataread = fs.readFileSync("abcd.txt","utf-8");


// fs.appendFileSync("abc.txt",dataread)

// console.log("file appended successfully")
// console.log(appendFIle)



// resume

// const data = fs.rename()



// // existsSync

// if(fs.existsSync("abcw.txt")){
//     console.log("the file is existed");
    
// }
// else{

//     console.log("the file is not existed");
// }






// const data = fs.mkdirSync('project')

const data1 =fs.writeFileSync('project/data.txt',"hiii")




// createfile

const data = fs.writeFileSync("hello3.txt","hello world");  // it will create a file and write once and finish the file and close it.no more write operation is possible


//so if we want to write multiple times we can use writeStream

// data.write("hello world my name is g vishor");
console.log("completed now");
