import React from "react";
import Hero from "./components/Hero.jsx";
import styles from "./styles/App.module.css";
import Form from "./components/contectForm.jsx"
import Counter from "./components/counter.jsx";
import Toggle from "./components/toggle.jsx";

export default function App() {
  return (
    <div className={styles.container}>
     {/* <Hero /> */}
      {/* <Form/> */}
      <Counter/>
      <Toggle />
    </div>
  );
}
