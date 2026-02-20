import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ user }) => {
  return (
    <>
      <h2>Child Component</h2>
      <GrandChild user={user} />
    </>
  );
};

export default Child;
