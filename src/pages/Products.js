import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ExtendProductList from "../components/ExtendProductList";
import ExtendPackageList from "../components/ExtendPackageList";

const Productos = () => {
  return (
    <Layout>
      <Navbar />
      <ExtendProductList />
      <ExtendPackageList />
    </Layout>
  );
};

export default Productos;
