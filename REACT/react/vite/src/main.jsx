// !create an single element in react by native way by using variable


// import React from "react";

// import ReactDOM ,{createRoot} from "react-dom/client"

// let content = React.createElement("h1",null,"Hello Vanakkam");  //important to use native way

//  createRoot(document.getElementById("root")).render(content);





// // !creating ans single Element in react by native way without using varaiable


// import React from "react";

// import {createRoot} from "react-dom/client"

// createRoot(document.getElementById("root")).render(React.createElement("h2",null,"hello fellow world"))






// //  creating multiple Element in react by native way without using varaiable


// import React from "react";

// import ReactDOM,{createRoot} from "react-dom/client"

// createRoot(document.getElementById("root")).render(
//     React.createElement("h1",null,"hello cooler",
//     React.createElement("h5",null,"hello heater",
//     React.createElement("p",null,"hello boiler"))))





// // createing a react element by using JSX way by  using an variable


// import React from "react";
// import ReactDOM,{createRoot} from "react-dom/client"

// let a = <h1>Hello guys good evening </h1>
// createRoot(document.getElementById("root")).render(a)






// // creating a react element by using JSX way by without using an variable

// import React from "react";
// import ReactDOM, { createRoot } from "react-dom/client"
// createRoot(document.getElementById("root")).render(
//     <h1>Hello guys good evening......</h1>
// )




// // creating a react multiple element by using JSX way by without using an variable

// import React, { Fragment } from "react";
// import ReactDOM, { createRoot } from "react-dom/client"
// createRoot(document.getElementById("root")).render(
//     <div>

//         <h1>Hello guys good evening......</h1>
//         <h2>Hello guys good evening......</h2>
//         <h1>Hello guys good evening......</h1>
//         <h2>Hello guys good evening......</h2>

//     </div>
// )



// // Fragment by using fragment keyword

// import React, { Fragment } from "react";
// import ReactDOM, { createRoot } from "react-dom/client"
// createRoot(document.getElementById("root")).render(
//     <Fragment>

//         <h1>Hello guys good evening......</h1>
//         <h2>Hello guys good evening......</h2>
//         <h1>Hello guys good evening......</h1>
//         <h2>Hello guys good evening......</h2>

//     </Fragment>
// )



// // List

// import React, { Fragment } from "react";
// import ReactDOM, { createRoot } from "react-dom/client"
// createRoot(document.getElementById("root")).render(
//     <>

//     <ol>
//         <li>Apple1</li>
//         <li>Apple2</li>
//         <li>Apple3</li>
//         <li>Apple4</li>
//         <hr />
//         <ul>
//             <li>Orange1</li>
//             <li>Orange2</li>
//             <li>Orange3</li>
//             <li>Orange4</li>
//             <li>Orange5</li>
//         </ul>
//     </ol>


//     </>
// )



// // BY USING JSX EXPRESSION

// import React from "react";
// import ReactDOM,{createRoot} from "react-dom/client"

// let name = "vishor G"
// let a = 10;
// let b = 100;
// let city = "thuraiyur"

// createRoot(document.getElementById("root")).render(
//     <>
    
//     <h1>My name is {name.toUpperCase()}</h1>
//     <h1>The sum of a and b is {a+b}</h1>
//     <h1>I am from {city.toUpperCase()}</h1>
//     </>
    
// )






// // JSX USING ARRAY

// import React from "react";
// import ReactDOM,{createRoot} from "react-dom/client"

// let name = ["vishor","kathir","sathya","karthick"]

// createRoot(document.getElementById("root")).render(
//     <>  


//     {/* <h1>My Name is {name[0].toUpperCase()}</h1>
//     <h1>My Name is {name[1]}</h1>
//     <h1>My Name is {name[2]}</h1>
//     <h1>My Name is {name[3]}</h1> */}
    
//     </>
// )










// //JSX USING OBJECT

// import React from "react";
// import ReactDOM,{createRoot} from "react-dom/client"

// let details = {
//     name:"vishor",
//     age:20,
//     city:"chennai"
// }

// createRoot(document.getElementById("root")).render(
//     <>
//     <h1>My name is {details.name.toUpperCase()}</h1>
//     <h1>I am {details.age} yrs old boy</h1>
//     <h1>I am from {details.city}</h1>
//     <h1></h1>
//     </>
// )




// // JSX USING ARRAY with map

// import React from "react";
// import ReactDOM,{createRoot} from "react-dom/client"

// let name = ["vishor","kathir","sathya","karthick"]

// createRoot(document.getElementById("root")).render(
//     <> 
//     <div> 
// {
//     name.map((names,index)=>(<h1  key={index}>My name is {names}</h1>))
// }    
//     </div>
//     </>
// )



// // BY USING TABLE




// import React from "react";
// import ReactDOM,{createRoot} from "react-dom/client"

// createRoot(document.getElementById("root")).render(
//     <>  

// <table border={6}>

//     <tr>
//         <th>NAME</th>
//         <th>AGE</th>
//         <th>CITY</th>
//     </tr>

//     <tr>
//         <td>vishor</td>
//         <td>20</td>
//         <td>Chennai</td>
//     </tr>
//     <tr>
//         <td>Kathir</td>
//         <td>22</td>
//         <td>Thuraiyur</td>
//     </tr>
//     <tr>
//         <td>Sathya</td>
//         <td>39</td>
//         <td>trichy</td>
//     </tr>
// </table>
    
//     </>
// )




// // CREATEING AND LINKING A CLASS BASED COMPONENT

// import React from "react";
// import ReactDOM, { createRoot }  from "react-dom/client"
// import App from "./App";

// createRoot(document.getElementById("root")).render(<App/>)







// // CREATEING AND LINKING A FUNCTION BASED COMPONENT

// import React from "react";
// import ReactDOM, { createRoot }  from "react-dom/client"
// import App from "./App";

// createRoot(document.getElementById("root")).render(<App/>)




// CREATEING AND LINKING MULTIPLE FUNCTION BASED COMPONENT

import React from "react";
import ReactDOM, { createRoot }  from "react-dom/client"
import App from "./App";


createRoot(document.getElementById("root")).render(<App/>)
