import React from "react";
import Link from "next/link";
import styles from "./SideBar.module.css";
import Social from "../list/Social";

const sideMenu = {
  home: "HOME",
  company: "COMPANY",
  services: "SERVICES",
  contact: "CONTACT",
};

export function SideBar({ on }) {
  return (
    <section className={`${styles.container} ${on ? styles.on : styles.off}`}>
      <div className="flex justify-center bg-black-700 p-5 items-center text-white">
        <ul className="cursor-pointer p-2">
          {Object.entries(sideMenu).map(([key, val]) => (
            <li key={key} className="mb-4">
              <Link href={`/${key}`}>
                <a className={styles.listItem}>{val}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Social />
    </section>
  );
}
