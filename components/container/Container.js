import React from "react";

export default function Container({ children }) {
  return (
   <section className='container mx-auto mb-14'>
     {children}
   </section>
  );
}
