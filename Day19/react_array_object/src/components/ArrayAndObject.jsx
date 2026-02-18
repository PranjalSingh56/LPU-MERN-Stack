import React, { use, useState } from "react";

const ArrayAndObject=()=>{

    const [user, setUser] = useState(
       { name:"Raj",
        Age: "25",
        city : "Delhi",
        clients:{
            name:"Ankit",
            Age: "21",
            city : "Delhi",
        }
    }
    );


    return(
        <>
        <h2>Array and Object</h2>
        <h2>Name: {user.name}</h2>
         <h2>Age: {user.Age}</h2>
          <h2>City: {user.city}</h2>
          <h2>Clients: {user.clients.name} {user.clients.Age} {user.clients.city}</h2>

        <button onClick={()=>{setUser({
            name:"Ravi", Age:"24", city:"Goa",clients:{name:"Akash", Age:"27", city:"Mumbai"}})
            }}>change</button>
        <button onClick={()=>setUser({...user,name:"Rohit",clients:{...user.clients,city:"Hydrabad"}})}> shallow Copy</button> 
{/* // shallow copy will change only top level content */}



        </>
    )
}

export default ArrayAndObject