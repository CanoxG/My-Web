import React from "react";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <header className='mb-12'>
      <Image
        src={"/images/background.jpeg"}
        layout="responsive"
        width="100%"
        height="100%"
        objectFit={"cover"}
        placeholder={'blur'}
        blurDataURL={'/images/background.jpeg'}
        objectPosition={"center"}

        quality={100}
      />
      <div className="container mx-auto -mt-24 relative z-10">
        <div className="flex sm:justify-end justify-center">{children}</div>
      </div>
    </header>
  );
}
