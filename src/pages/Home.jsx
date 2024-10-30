import React from "react";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Experience from "../components/Experience/Experience";
import Services from "../components/Services/Services";
import Project from "../components/Project/Project";
import Customer from "../components/Customer/Customer";
import Comment from "../components/Comment/Comment";
import WebLog from "../components/WebLog/WebLog";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Experience />
      <Services />
      <Project />
      <Customer />
      <Comment />
      <WebLog />
      <Footer />
    </>
  );
}
