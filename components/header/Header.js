import React from "react";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <header id={'home'} className="mb-12">
      <Image
        src={"/images/background.jpeg"}
        layout="responsive"
        width="80%"
        height="70%"
        objectFit={"cover"}
        placeholder={"blur"}
        blurDataURL={"/images/background.jpeg"}
        objectPosition={"center"}
        quality={50}
      />
      <div className="container mx-auto -mt-24 relative z-10">
        <div className="flex sm:justify-end justify-center">{children}</div>
      </div>
    </header>
  );
}
