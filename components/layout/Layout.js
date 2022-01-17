import React from "react";
import Head from "next/head";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Phrase from "../header/Phrase";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lorien Consultancy</title>
        <meta
          name="viewport"
          content="width=device-width initial-scale=1.0 maximum-scale=1"
        />
        <meta
          name="description"
          content="Lorien offers to create web design, responsive web and mobile applications with
          professional Front-end and Back-end developers. Technologies with ReactJs, NextJs,
          Tailwind, Nodejs, React Native, Javascript, Html, Css, MongoDb"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header>
        <Phrase />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
