import React from "react";

export default function Text({ children }) {
  return (
    <p className="font-serif tracking-wider font-light text-gray-500 leading-relaxed">
      {children}
    </p>
  );
}
