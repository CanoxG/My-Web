import React from "react";
import styles from "./HeaderLine.module.css";

export default function Header({ children }) {
  return (
    <header id={"home"} className={styles.frame}>
      <div
        className={styles.frame}
        style={{ backgroundImage: 'url("/images/background.png")' }}
      ></div>
      <div className="container mx-auto -mt-40 relative z-10">
        <div className="flex sm:justify-end justify-center">{children}</div>
      </div>
    </header>
  );
}
