import React from "react";
import styles from "./List.module.css";
import Link from "next/link";

const menuList = [
  ["", "HOME"],
  ["company", "COMPANY"],
  ["services", "SERVICES"],
  ["contact", "CONTACT"],
];

export default function List() {
  return (
    <section>
      <div className="flex grow sm:grow-0 justify-center p-3 text-sm text-white">
        <ul className={styles.mainMenu}>
          {menuList.map(([item, key]) => (
            <li key={key} className="mx-4">
              <Link href={`/${item}`}>
                <a className={styles.listItem}>{key}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
