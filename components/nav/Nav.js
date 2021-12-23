import React from "react";
import List from "../list/List";
import Hamburger from "../button/Hamburger";

export default function Nav() {

  return (
    <nav className="flex items-center bg-black">
      <div className="flex-auto sm:grow p-6">
        <img src={"/images/logo.png"} className="cursor-wait w-14 sm:w-20 lg:w-26" />
      </div>
      <List />
      <Hamburger open={false}/>
    </nav>
  );
}
