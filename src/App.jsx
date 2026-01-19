import React, { use, createContext } from 'react'
import {useState} from 'react'
import Parent from './Parent'


export const NameContext = createContext();
const App = () => {
  const [name, setName] = useState('John doe')
  return (
    <NameContext.Provider value={{name,setName}}>
    <div style={{border: '1px solid red', padding: '100px'}}>
      
      App 
      <h1>Hello {name}. 'm Savitha</h1>
      <Parent />
      </div>
</NameContext.Provider>
  )
}

export default App


// useContext: the component which is going to be parent and providing the state will be provider component