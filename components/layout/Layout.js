import React from "react";
import Head from "next/head";
import Header from "../header/Header";
import { SideBar } from "../side-bar/SideBar";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import HeadLine from "../header/HeadLine";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lorien Consultancy</title>
        <meta
          name="viewport"
          content="width=device-width initial-scale=1.0 maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header>
        <HeadLine />
      </Header>
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
