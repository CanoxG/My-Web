import React from "react";
import NavList from "../list/NavList";
import Hamburger from "../button/Hamburger";

export default function Nav() {

  return (
    <nav className="flex items-center z-50 fixed top-0 w-full bg-black h-20">
      <div className="flex-auto sm:grow p-4">
        <img src={"/images/logo.png"} className="cursor-pointer w-14 sm:w-20 lg:w-26" />
      </div>
      <NavList />
      <Hamburger open={false}/>
    </nav>
  );
}
