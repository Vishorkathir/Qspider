import React from 'react'
import GrandFather from './GrandFather'

const Son=(y)=> {
  return (
    <div>
        <h1>I am Son</h1>
        <GrandFather data3={y.data2}/>
      
    </div>
  )
}

export default Son
