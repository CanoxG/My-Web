import React from "react";
import styles from "./NavList.module.css";
import Link from "next/link";

//
const menuList = [
  ['', "HOME", 'home'],
  ['', "COMPANY", 'about'],
  ['', "SERVICES", 'services'],
  ['', 'PROJECTS', 'projects'],
  ["", "CONTACT", 'contact'],
];

export default function NavList() {
  return (
    <section>
      <div className="flex grow sm:grow-0 justify-center p-3 text-sm text-white">
        <ul className={styles.mainMenu}>
          {menuList.map(([item, key, id]) => (
            <li key={key} className="mx-4">
              <Link href={`/${item}#${id}`}>
                <a className={styles.listItem}>{key}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
