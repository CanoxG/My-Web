import React from "react";
import Section from "../section/Section";

export default function Process({ children }) {
  return (
    <div
      className="brightness-75 h-96 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/images/process.jpeg")' }}
    >
      <Section>
        <h2 className="pt-4 bg-white/90 text-center font-black text-lg sm:text-xl text-black">
          Project Design & Development Process
        </h2>
        <div
          className="grid grid-cols-3 gap-2 px-2 pt-4 bg-white/90 rounded items-end
        sm:grid-cols-3 sm:gap-16 md:grid-cols-6 md:gap-1"
        >
          {children}
        </div>
      </Section>
    </div>
  );
}
