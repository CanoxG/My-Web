import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log('APP')
  return <Component {...pageProps} />;
}
export default MyApp;
