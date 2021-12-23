import React from "react";

export default function Header({ children }) {
  return (
    <header
      className="h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/images/background.jpeg")' }}
    >
      {children}
    </header>
  );
}
