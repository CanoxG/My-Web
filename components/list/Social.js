import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const SOCIAL_LINKS = [
  ["facebook.svg", "facebook"],
  ["linkedin.svg", "linkedin"],
  ["google.svg", "google"],
  ["mail.svg", "mail"],
];

const SOCIAL_LINKS2 = {
  facebook: "facebook.svg",
  linkedin: "linkedin.svg",
  google: "google.svg",
  mail: "mail.svg",
};

export default function Social() {
  return (
    <div className="flex-col text-center text-white ">
      <Button />
      <ul className="flex mt-4 justify-center cursor-pointer">
        {Object.entries(SOCIAL_LINKS2).map(([key, val]) => (
          <li key={key} className="mx-3 sm:mx-3 bg-white rounded-full w-6">
            <Link href={`/${val}`}>
              <a>
                {" "}
                <img src={`/images/${val}`} alt={key} />{" "}
              </a>
            </Link>
          </li>
        ))}
        {/*OR*/}
        {/*{SOCIAL_LINKS.map(([val, key]) => (*/}
        {/*  <li key={key} className="mx-1 bg-white rounded-full w-6">*/}
        {/*    <img src={`/images/${val}`} alt={key} />*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
      <p className="text-xs mt-4">
        Copyright <span>©</span> <span>|</span> {new Date().getFullYear()}
      </p>
    </div>
  );
}
