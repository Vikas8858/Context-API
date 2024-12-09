import React, { useState } from 'react'
import { createContext } from 'react';
export const UserContext= createContext();

const Context = (props) => {
    const[user, setUser]=useState([
        {id: 0, username: "john Doe", city:"Mumbai"},
        {id: 1, username: "Krishna", city:"Lucknow"},
        {id: 2, username: "julie", city:"Varanasi"},
        {id: 3, username: "vikas", city:"Delhi"},
    ]);    
  return (
    <UserContext.Provider  value={{user, setUser}}>
        {props.children}
        </UserContext.Provider>
  )
}

export default Context;
