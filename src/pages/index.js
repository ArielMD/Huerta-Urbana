import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProductsList from "../components/ProductsList";
import PackagesList from "../components/PackagesList";
import Location from "../components/Location";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <Hero>
      <Nav />
    </Hero>
    <Info />
    <ProductsList />
    <PackagesList />
    <Location />
    <Footer />
  </Layout>
);

export default IndexPage;
