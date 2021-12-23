import React from "react";

export default function Text({ children }) {
  return (
    <p className="text-slate-500 font-serif tracking-wider leading-relaxed">
      {children}
    </p>
  );
}
