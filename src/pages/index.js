import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProductsList from "../components/ProductsList";
import PackagesList from "../components/PackagesList";

const IndexPage = () => (
  <Layout>
    <Hero>
      <Nav />
    </Hero>
    <Info />
    <ProductsList />
    <PackagesList />
  </Layout>
);

export default IndexPage;
