import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div style={{border: '1px solid red', padding: '100px'}}>
        
        Parent
        <h1>Hello </h1>
        <Child />
       
    </div>
  )
}

export default Parent