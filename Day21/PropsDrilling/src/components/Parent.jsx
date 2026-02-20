import React from "react";
import Child from "./child";

const Parent = ({ user }) => {
  return (
    <>
      <h2>Parent Component</h2>
      <Child user={user} />
    </>
  );
};

export default Parent;
