import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/about/About";
import Slide from "../components/slide/Slide";
import Inscrection from "../components/inscrection/Inscrection";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Slide />
      <Inscrection />
      <Footer />
    </>
  );
};

export default HomePage;
