import React from "react";
export default function Hero() {
  const inlineStyle = {
    padding: "40px",
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center"
  };

  return (
    <section style={inlineStyle}>
      <h1>React + Vite Landing Page</h1>
      <p>Fast development and optimized production build</p>
      <button>Get Started</button>
    </section>
  );
}
