// let user={

//     name:"Jhon",
//     surename:"smith"
// }

// user.name = "pete"

// console.log(user);
// delete user.name;
// console.log(user)


// // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let obj ={
//     // name:"vishor"
// };

// function isEmpty(obj){
// for(let key in obj){

//      return "value"
// } 

// return "no values"

// }
// console.log(isEmpty(obj))


// // We have an object storing salaries of our team:


// let salaries ={
//     // vishor:200,
//     // kathir:300
// }


// let sum = 0;

// for(let key in salaries){
//     sum = sum + salaries[key]
// }


// console.log(sum)


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


let obj ={
     width: 200,
  height: 300,
  title: "My menu"
}

function multiplyNumeric(obj){
    for(let key in obj){
       if(typeof obj[key] == 'number'){
        obj[key] *= 2;
       }
    }
    return obj
}

console.log(multiplyNumeric(obj))