import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import About from "../components/About";

const AboutUs = () => {
  return (
    <Layout>
      <Navbar />
      <About />
      <Location />
      <Footer />
    </Layout>
  );
};

export default AboutUs;
