import React from "react";
import styles from './Separator.module.css'

export default function Separator({ width = 'large' }) {
  return (
    <div className={`${styles.line} ${styles[width]}`}>
      <span></span>
    </div>
  );
}
