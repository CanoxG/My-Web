import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const SOCIAL_LINKS = [
  ["svg/facebook.svg", "facebook", "https://www.facebook.com/LorienConsultancy"],
  ["svg/linkedin.svg", "linkedin", "https://www.linkedin.com/in/can-guven-5b16b559/"],
  ["svg/instagram.svg", "google", "https://www.instagram.com/cguven/"],
  ["svg/git.svg", "github", "https://github.com/CanoxG"],
];

// const SOCIAL_LINKS2 = {
//   facebook: "svg/facebook.svg",
//   linkedin: "svg/linkedin.svg",
//   google: "svg/google.svg",
//   mail: "svg/mail.svg",
// };

export default function Social() {
  return (
    <div className="flex-col text-center text-white whitespace-nowrap">
      <Button />
      <ul className="flex mb-3 justify-center cursor-pointer">
        {/*{Object.entries(SOCIAL_LINKS2).map(([key, val]) => (*/}
        {/*  <li key={key} className="mx-3 sm:mx-3 bg-white rounded-full w-6">*/}
        {/*    <Link href={`/${val}`}>*/}
        {/*      <a>*/}
        {/*        {" "}*/}
        {/*        <img src={`/${val}`} alt={key} />{" "}*/}
        {/*      </a>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*))}*/}
        {/*/!*OR*!/*/}
        {SOCIAL_LINKS.map(([val, key, path]) => (
          <li key={key} className="mx-1 bg-white rounded-full w-7">
            <Link href={path}>
              <span>
                <img src={`/${val}`} alt={key} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-xs">
        Copyright <span>©</span> <span>|</span> {new Date().getFullYear()}
      </p>
    </div>
  );
}
