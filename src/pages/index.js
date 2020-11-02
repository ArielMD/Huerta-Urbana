import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ListProducts from "../components/ListProducts";
import ListPackages from "../components/ListPackages";

const IndexPage = () => (
  <Layout>
    <Hero>
      <Nav />
    </Hero>
    <Info />
    <ListProducts />
    <ListPackages />
  </Layout>
);

export default IndexPage;
