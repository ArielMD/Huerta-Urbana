import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";

const IndexPage = () => (
  <Layout>
    <Hero>
      <Nav />
    </Hero>
    <Info />
  </Layout>
);

export default IndexPage;
