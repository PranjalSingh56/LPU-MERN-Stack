import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const GrandChild = ({ user }) => {
  const name = useContext(UserContext);
  const [value, setValue] = useState(name)

  return (
    <>
      <h2>GrandChild Component PopsDrilling Data =  {user}</h2>
      <h2>UseContext Data = {value}</h2>
      <button onClick={()=>{setValue(value ===name? "Ravi":name)}}>Change Name</button>
    </>
  );
};

export default GrandChild;
