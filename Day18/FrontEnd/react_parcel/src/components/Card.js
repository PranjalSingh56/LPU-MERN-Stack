import React from "react";

export default function Card({ title }) {  // card file exports only one thing import without {}
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>{title}</p>
    </div>
  );
}


// default exports single mean components
// name exports= multiple exports utelities/ components in same file
// without bundlers we cant use JSX(browser can not use)
//We need to run indivisual file so the performance is slow 

//with bundle
// reduce multiple file request
// fast loading
//supports import exports & jsx
// optimized production code

