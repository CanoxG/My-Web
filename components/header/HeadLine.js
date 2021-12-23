import React from "react";
import styles from "./HeaderLine.module.css";

export default function HeadLine() {
  return (
    <div className={`container mx-auto ${styles.container}`}>
      <h1>
        WITH <strong> UNIQUE </strong>SOLUTIONS
      </h1>
    </div>
  );
}
