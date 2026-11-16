// // Props


// import React from "react";

// const Child = (x) => {
//     return (
//         <>
//             <h1>I am Child Component</h1>

//             {/* props single data */}
//             {/* <h1>Good {x.data}</h1> */}


//             {/* array */}
//             {/* <h1>My name is {x.data[0]}</h1>
//             <h1>My name is {x.data[1]}</h1>
//             <h1>My name is {x.data[2]}</h1> */}


//             {/* object */}
//             {/* <h1>My name is {x.data.name}</h1>
//             <h1>My name is {x.data.age}</h1>
//             <h1>My name is {x.data.city}</h1> */}


//             {/* Object and array */}

//             {/* <h1>My name is " {x.data.name} "</h1>
//             <h1>I am " {x.data.age} " yrs old </h1>
//             <h1>I love " {x.data.food[0]} " </h1>
//             <h1>I love love " {x.data.food[1]} "</h1> */}


//             {/* multiple object in the form of an "Array" */}

//             {/* <h1>I need to learn {x.data[0].course} with ID {x.data[0].id}</h1>
//             <h1>I need to learn {x.data[1].course} with ID {x.data[1].id}</h1>
//             <h1>I need to learn {x.data[2].course} with ID {x.data[2].id}</h1> */}

//             {/* Passing image as props by using absolute path */}

//             {/* <img src={x.pic} alt="kuthureaa" height={400} /> */}


//             {/* passing json object as props */}
//             {/* <h1>My name is {x.data[0].name} and {x.data[0].age} yr old boy</h1>
//             <h1>My name is {x.data[1].name} and {x.data[1].age} yr old boy</h1>
//             <h1>My name is {x.data[2].name} and {x.data[2].age} yr old boy</h1> */}








//         </>
//     )
// }

// export default Child




{/* CLASS BASED COMPONENT */ }




import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>


                {/* Passing Props in Class Based Component */}

                {/* <h1>Good {this.props.data}</h1> */}


                {/* Passing Arrays as Props in CBC */}

                {/* <h1>My name is {this.props.data[0]} </h1>
                <h1>Myself {this.props.data[1]} </h1>
                <h1>I am {this.props.data[2]}</h1> */}


                {/* Passing Object as props in CBC */}

                {/* <h1>My name is "{this.props.data.name}" and
                    <br />I am "{this.props.data.age}" years old with 
                    <br /> My id is "{this.props.data.id}"</h1> */}



                {/* PaSSING iMAGE AS PROPS BY USING ABSOLUTE PATH */} 

                {/* <h1>image :</h1>
                <img src={this.props.pic} alt="" height={400} width={500} /> */}




                {/* PASSING JSON AS PROPS BY USING CBC */}

                <h1>My name is " {this.props.data[0].name} " and  am a " {this.props.data[0].age} " years old.</h1>
                <h1>My name is " {this.props.data[1].name} " and am a " {this.props.data[1].age} " years old.</h1>
                <h1>My name is " {this.props.data[2].name} " and am a " {this.props.data[2].age} " years old.</h1>
                

            </div>
        )
    }
}

export default Child