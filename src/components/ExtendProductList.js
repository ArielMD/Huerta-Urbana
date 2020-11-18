import React, { useState } from "react";
import Banner from "./Banner";
import list from "../statics/productos";
import ProductCardList from "./ProductCardList";
import Filter from "./Filter";

const ExtendProductList = () => {
  const [juices, setJuices] = useState(list);

  const filter = id => {
    if (id !== 0) {
      setJuices(list.filter(product => product.id === id));
    } else {
      setJuices(list);
    }
  };

  return (
    <React.Fragment>
      <Banner text="Conoce Nuestros Saludables Productos" type="products" />
      <Filter filter={filter} />
      {juices.map(product => (
        <ProductCardList
          key={product.id}
          type="product"
          text={product.nombre}
          list={product.productos}
        />
      ))}
      {/* <ProductCardList
        type="product"
        text="jugos Verdes (500ml)"
        list={juices.jugosVerdes}
      />
      <ProductCardList
        type="product"
        text="Jugos de Raiz (500ml)"
        list={juices.jugosRaiz}
      />
      <ProductCardList
        type="product"
        text="Shots de Jengibre (60ml)"
        list={juices.shotsJengibre}
      />
      <ProductCardList
        type="product"
        text="Smoothies (500ml)"
        list={juices.smothies}
      />
      <ProductCardList
        type="product"
        text="Leches Vegetales (500ml)"
        list={juices.lechesVegetales}
      />
      <ProductCardList
        type="product"
        text="Bebidas Adicioneles"
        list={juices.bebidasAdicionales}
      /> */}
    </React.Fragment>
  );
};

export default ExtendProductList;
