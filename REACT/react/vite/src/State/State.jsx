// import React, { useState } from 'react'

// const State = () => {

//   // const [state, setState] = useState("Raja");
//   // const [count, setCount] = useState(0);

//   // const [state,setState]=useState("Raja");

//   // const value=()=>{
//   //   setState("Vishor");
//   // }

//   // const [state,setState]=useState("Raja");
//   // const [count,setCount]=useState(0);

//   // const upVal = ()=>{
//   //   setState("Kathir");
//   // }
//   // const reset =()=>{
//   //   setState("Raja")
//   //   setCount(0)
//   // }
//   // const countVal = ()=>{
//   //   setCount(count+2);
//   // }


//   // const [state,setState] = useState({name:"raja",age:20,city:"chennai"})
//   // const data = { name: "raja", age: 20, city: "chennai" }
//   // const updatedData = { name: "kathir", age: 10, city: "tirchy" }

//   // const [state, setState] = useState(data)


//   // const updateVal = () => {
//   //   setState(updatedData)
//   // }

//   const [count,setCount]=useState(0);



//   return (
//     <>
//       {/* <h1>I am State component</h1>
//         <h1>My name is :{state}</h1>

      
//         <button onClick={()=>{setState("Vishor")}}>Update name</button>
//      */}


//       {/* <h1> Name:{state}</h1>
//      <button onClick={value}>Update</button> */}





//       {/* update Both value by using UseState */}
 
//       {/*<h1>Name is {state}</h1>
//          <h1>Count : {count}</h1>
         
//          <button onClick={upVal}>Update</button> &emsp;
//          <button onClick={reset}>Reset</button> &emsp;
//          <button onClick={countVal}>Count </button> */}



//       {/* update two objects at a time using states */}

//       {/* <h1>My name is {state.name}</h1>
//       <h1>I am {state.age} years old</h1>
//       <h1>I am From {state.city}</h1>
//       <button onClick={updateVal}>Update</button> */}



//       {/*  updating count by using states in FBC

//       <h1>Count : {count}</h1>
//       <button onClick={()=>{setCount(count+10)}}>inc</button> &emsp;
//       <button onClick={()=>{setCount(count-10)}}>dec</button> */}


      


//     </>
//   )
// }

// export default State









// USING STATES IN CLASS BASED COMPONENT



import React, { Component } from "react";


class State extends Component {

  // state ={name:"vishor"}

  // state ={name:"Kathir",age:40,city:"Chennai"}

  // state = 0;  wrong must use object

  state = {count:0};

  render(){
    return(
      <>
{/* 
      <h1>My name is {this.state.name}</h1>
      <button onClick={()=>{this.setState({name:"Kathir"})}}>update</button> &emsp;
      <button onClick={()=>{this.setState({name:"vishor"})}}>go back</button> */}





      {/* <h1>My name is {this.state.name}</h1>
      <h1>I am a {this.state.age} years old boy</h1>
      <h1>I am from {this.state.city} </h1>

      <button onClick={()=>{this.setState({name:"Gowtham",age:10,city:"Trichy"})}}>update details</button> &emsp;
      <button onClick={()=>{this.setState({name:"Kathir",age:40,city:"Chennai"})}}>Back to details</button> */}



{/* count change by state by using CBC */}
      <h1>count : {this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Inc</button>






      </>
    )
  }
}

export default State
