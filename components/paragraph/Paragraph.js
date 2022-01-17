import React from "react";

export default function Paragraph({ children }) {
  return (
    <p className="font-serif tracking-wider text-sm font-light text-gray-500 leading-relaxed">
      {children}
    </p>
  );
}
