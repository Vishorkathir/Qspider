


// // CREATEING AND LINKING A CLASS BASED COMPONENT
// import React, { Component } from "react";

// class App extends Component {
//     render() {
//         return (
//             <>
//                 <h1>My name is Vishor G</h1>
//                 <h1>I am from Thuraiyur</h1>
//             </>
//         )
//     }
// }
// export default App

// // CREATEING AND LINKING A FUNCTION BASED COMPONENT

// import React from "react";



// const App =()=>{
//     return(
//         <>
//         <h1>My name is Vishor G</h1>
//         <h1>I am from Thuraiyur🔥🔥</h1>

//         </>

//     )
// }
// export default App



// // CREATEING AND LINKING MULTIPLE FUNCTION BASED COMPONENT

// import React from "react";
// import Header from "./Header";
// import Nav from "./Nav";
// import Footer from "./Footer";


// const App =()=>{
//     return(
//         <>
//         <h1>My name is Vishor G</h1>
//         <h1>I am from Thuraiyur🔥🔥</h1>
//         <hr />

//         <Header/>
//         <Nav/>
//         <Footer/>
//         </>

//     )
// }
// export default App



// CREATING AND LINKING MULTIPLE COMPONENT BASED COMPONENT

// import React, { Component } from "react";
// import Nav from "./Nav";
// import Header from "./Header";
// import Footer from "./Footer";

// class App extends Component{
//     render(){
//         return(
//             <>
//             <h1>Hello Am a App Component in CBC</h1>
//             <Nav/>
//             <Header/>
//             <Footer/>
//             </>
//         )
//     }
// }

// export default App




// PROPS

// imr imrd

import React from "react"

import Parent from "./Props/Parent"
import GrandFather from "./PropsDrilling/GrandFather"
import State from "./State/State"

const App = () => {
    return (
        <>
            {/* <h1>I am App</h1> */}
            {/* <Child data="Evening all......"/> */}


            {/* props */}
            {/* <Parent/> */}

            {/* Props Drilling */}
            {/* <GrandFather/> */}



            {/* states and hooks */}
            <State />
        </>
    )
}

export default App