
// import Buffer from 'Buffer';

const data = Buffer.from('Hello, World!');

const data2 = Buffer.alloc(10);
const data3 = Buffer.alloc(4,69);

console.log(data.length);
console.log(data.toString());
console.log(data);

console.log(data2);

console.log(data3);
console.log(data3.toString());


//modify the buffer 
const data4 = Buffer.from("hello")
console.log(data4[0]);

data4[0] = 66;
console.log(data4.toString());



// concadenat the buffers

const data5 = Buffer.from("Hi")
const data6 = Buffer.from("Hi hello ")
const data7 = Buffer.from(" Welcome to ....")

const data8 = Buffer.concat([data5,data6,data7]);
console.log(data8.toString());