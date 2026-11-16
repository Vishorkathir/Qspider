import React from 'react'
import Son from './Son'

const Father =(x)=> {
  return (
    <div>
        <h1>I am Father</h1>
        <Son data2={x.data}/>
      
    </div>
  )
}

export default Father
