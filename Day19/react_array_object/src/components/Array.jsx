import React, { useState } from "react";

const ArrayMethod =()=>{
    const[detail,setDetail] = useState(["Raj", "Ravi", "Rohit"])
    const[input,setInput] = useState("")

    const addUser=()=>{
        setDetail([...detail,input])
        setInput("")
    }
    const removeUser=()=>{
        setDetail([detail.slice(0,-1)])
    }

    const filterUser=()=>{
        setDetail([...detail,detail.filter((item)=>item.length>3)])
    }
    return(
        <div>
    
       <ul>
        {detail.map((item, index) => (
          <li key={index}>Item: {item}</li>
        ))}
      </ul> 
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addUser}>Add</button>
      <button onClick={removeUser}>remove</button>
      <button onClick={filterUser}>filter</button>

</div>
    )
}

export default ArrayMethod;