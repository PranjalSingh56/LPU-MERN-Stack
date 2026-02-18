import React, { useEffect, useState } from "react";

const Timer = ()=>{
    const[timer, setTimer] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval= setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)}
        return ()=>{
        clearInterval(interval)
    }
    },[])
    

    return(
        <div>
            <h2>{timer}</h2>
            <button onClick={timerHandler}> start</button>
            <button onClick={clear}> end</button>
        </div>
    )
}

export default Timer