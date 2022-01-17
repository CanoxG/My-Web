import React from "react";
import styles from "./Hamburger.module.css";
import { SideBar } from "../side-bar/SideBar";


export default function Hamburger({ open }) {
  const [state, setState] = React.useState(open);

  return (
    <div className="flex-none sm:hidden mr-6 w-5">
      <button
        className={`${state ? styles.on : ''} `}
        onClick={() => setState(!state)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <SideBar on={state} />
    </div>
  );
}
