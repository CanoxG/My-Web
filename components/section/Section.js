import React from "react";

export default function Section({ children }) {
  return (
   <section className='container mx-auto mt-20'>
     {children}
   </section>
  );
}
