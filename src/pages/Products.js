import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import ExtendProductList from "../components/ExtendProductList";
import ExtendPackageList from "../components/ExtendPackageList";

const Productos = () => {
  return (
    <Layout>
      <Navbar />
      <ExtendProductList />
      <ExtendPackageList />
      <Location />
      <Footer />
    </Layout>
  );
};

export default Productos;
