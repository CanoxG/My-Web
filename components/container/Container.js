import React from "react";

export default function Container({ children }) {
  return (
   <section className='container mx-auto mb-20'>
     {children}
   </section>
  );
}
