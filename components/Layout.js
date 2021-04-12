import React from "react";
import Footer from "./Footer";
import Navbar from "./MyNavbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
}

