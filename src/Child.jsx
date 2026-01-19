import React from 'react'
import {useContext} from 'react';
import { NameContext } from './App';    

const Child = () => {
    const {name,setName} = useContext(NameContext)
  return (
    <div style={{border: '1px solid red', padding: '100px'}}>
        
        <h1>Hello {name}</h1>
        <button onClick={()=>setName('Abraham')}>Click</button>
        Child
        </div>
  )
}

export default Child