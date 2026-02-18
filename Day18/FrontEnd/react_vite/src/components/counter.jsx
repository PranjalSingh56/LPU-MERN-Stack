import React, { useState } from "react";


const Counter=()=>{
const [count, setCount]=useState(0);

const buggy=()=>{
    setCount(count+1);
    setCount(count+1);
}

const increment=()=>{
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
}

const reset = ()=>{
    setCount(0)
}
return(
    <div>
        <h2>counter</h2>
        <h2>{count}</h2>

        <button onClick={buggy}>buggy count +2</button>
        <button onClick={increment}> count +2</button>
        <button onClick={reset}> reset</button>
    </div>
)
}

export default Counter;


