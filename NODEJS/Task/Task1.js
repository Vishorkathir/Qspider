// Create a program that does all of the following:
// Create students.txt
// Add 5 student names
// Read the file
// Copy the data to backup.txt
// Display both file contents
// Rename backup.txt to student-backup.txt


import fs from 'fs';

// const CreateFolder = fs.mkdirSync("Tasking1")


// const fileCreated = fs.writeFileSync('Tasking1/student.txt',"Kathir,Vishor,Karthick,Ramya,Pandiyan","utf-8")


// Read the file
// console.log(fs.readFileSync("Tasking1/student.txt","utf-8"))


// // Copy the data to backup.txt

// const  readdetails = fs.readFileSync("Tasking1/student.txt");

// fs.appendFileSync("Tasking1/backup.txt",readdetails);


// Display both file contents

// console.log(

//     fs.readFileSync("Tasking1/backup.txt","utf-8")
// );
// console.log(

//     fs.readFileSync("Tasking1/student.txt","utf-8")
// )

// Rename backup.txt to student-backup.txt

const data = fs.rename("Tasking1/backup.txt","Tasking1/student-backup.txt" ,(err,data)=>{
    if(err){
        throw err
    }
    else{
        console.log("The file name is changed successfully!",data)
    }
});








// const CreateFile = fs.writeFileSync("Task/student.txt","hiii hello")
// console.log(CreateFile);
