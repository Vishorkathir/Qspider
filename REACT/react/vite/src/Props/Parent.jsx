// // rafce


// import React from "react"
// import Child from "./Child"

// // import image from "/horse.webp"

// import JSON from './Users.json'

// const Parent = () => {



//     // const person = {
//     //     name:"vishor",
//     //     age:20,
//     //     food:["Sambar","Idly"]
//     // }

//     // Multiple objects in the form of an array

//     // const details = [
//     //     { id: 1, course: "HTML" },
//     //     { id: 2, course: "CSS" },
//     //     { id: 3, course: "JS" },
//     // ]


//     return (
//         <>
//             <h1>I am Parent</h1>


//             {/* <Child data="Evening all......"/> */}

//             {/* <Child data={["vishor", "kathir", "karthick"]} /> */}


//             {/* <Child data={{name:"vishor",age:20,city:"chennai"}}/> */}

//             {/*  <Child data={person}/> */}


//             {/* <Child data ={details}/> */}
// {/* 
//             <Child pic="https://media.gettyimages.com/id/2299335261/photo/australia-v-bangladesh-womens-odi-series-game-1.jpg?s=612x612&w=gi&k=20&c=wkNUSRuwfyv9S4MbxyVHSnJdeCvShG4-BzTB6q5L594=" /> */}

//             {/* <Child pic={image}/> */}



//             <Child data={JSON}/>




//         </>
//     )
// }

// export default Parent



import React, { Component } from 'react'
import Child from './Child'
import Users from './Users.json'

class Parent extends Component {
    render() {
        return (
            <div>


                {/* <Child data = "Night Bye Bye......."/> */}

                {/* <Child data ={["Raja","Vishor","Kathir"]}/> */}

{/* 
                <Child data={{
                    id: 1,
                    name: "vishor",
                    age: 20
                }} /> */}

                {/* <Child pic='https://media.gettyimages.com/id/2299335261/photo/australia-v-bangladesh-womens-odi-series-game-1.jpg?s=612x612&w=gi&k=20&c=wkNUSRuwfyv9S4MbxyVHSnJdeCvShG4-BzTB6q5L594="'/> */}


                <Child data={Users}/>

            </div>
        )
    }
}


export default Parent
