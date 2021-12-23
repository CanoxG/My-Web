import React from "react";

export default function Section({ children }) {
  return (
   <section className='container mx-auto mb-20'>
     {children}
   </section>
  );
}
