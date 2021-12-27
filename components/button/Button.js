import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button() {
  return (
    <Link href={"/#logo"}>
      <a>
        <button>
          <div className={`animate-bounce ${styles.btn}`}>⌃</div>
        </button>
      </a>
    </Link>
  );
}
