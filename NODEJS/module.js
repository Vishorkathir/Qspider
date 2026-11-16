// console.log("hello nodejs")
// console.log("hello nodejs")
// console.log(1+3)


// es module

// import { add,sub,mul,div} from "./operations.js";

// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(mul(10,20));
// console.log(div(10,20));



// //  commonjs

// const {add,sub,mul,div,obj} = require("./operations.js");


// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(mul(10,20));
// console.log(div(10,20));



// // es module

// import {marks} from "./operations.js"

// console.log("",marks.Tamil);
// console.log(marks);

// commonJS

let {marks} = require('./operations.js');

console.log(marks.Tamil);
console.log(marks);



