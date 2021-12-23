import React from "react";

export default function Wrapper({ children }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-16 `}>{children}</div>
  );
}
