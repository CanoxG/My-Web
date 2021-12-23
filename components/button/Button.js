import React from "react";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button>
      <div className={`animate-bounce ${styles.btn}`}>⌃</div>
    </button>
  );
}
