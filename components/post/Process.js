import React from "react";

export default function Process({ children }) {
  return (
    <div
      className="h-80 bg-cover bg-center bg-no-repeat blur-sm text-white mb-20"
      style={{ backgroundImage: 'url("/images/process.jpeg")' }}
    >
      {children}
    </div>
  );
}
