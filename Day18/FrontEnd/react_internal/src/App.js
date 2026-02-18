import React from "react";
import Card from "./components/Card";
import styles from "./styles/Card.module.css";

export default function App() {
  return (
    <div>
      <h1>Development vs Production Build</h1>

      <div className={styles.box}>
        Styled using CSS Module
      </div>

      <Card title="Inline Styled Card" />
    </div>
  );
}
