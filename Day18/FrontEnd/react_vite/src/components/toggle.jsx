import React, { useEffect, useState } from "react";

const Toggle=()=>{
    const [toggle, setToggle] = useState("off");
     const [dark, setDark] = useState(()=>{
        return localStorage.getItem("darkMode") === "true";
     });
    
     useEffect(()=>{
        localStorage.setItem("darkMode",dark)
     },[dark])

    const event=()=>{
        setToggle(!toggle)
    }
    const style ={
        padding:"20px",
        background:dark ? "#111":"#eee",
        color:dark ? "#fff" : "#000",
        textAlign:"center"
    }
    return(

        < >
        <div>
            <h2>{toggle?"on":"off"}</h2>
            <button onClick={event}>click</button>
        </div> 


            <div style={style}>
            <h2>{dark ? "DarkMode":"LightMode"}</h2>
            <button onClick={()=>{
                setDark(prev=>!prev)
            }}>change</button>

            </div>
        </>
        
    )
}
export default Toggle;