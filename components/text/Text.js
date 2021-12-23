import React from "react";

export default function Text({ children }) {
  return (
    <p className="font-serif tracking-wider leading-relaxed">
      {children}
    </p>
  );
}
