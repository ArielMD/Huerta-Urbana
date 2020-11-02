import React from "react";
import Banner from "./Banner";
import Carrusel from "./Carrusel";
import list from "../statics/productos";

const ListProducts = () => {
  return (
    <React.Fragment>
      <Banner text="Conoce Nuestros Saludables Productos" />
      <Carrusel
        type="product"
        text="jugos Verdes (500ml)"
        list={list.jugosVerdes}
      />
      <Carrusel
        type="product"
        text="Jugos de Raiz (500ml)"
        list={list.jugosRaiz}
      />
      <Carrusel
        type="product"
        text="Shots de Jengibre (60ml)"
        list={list.shotsJengibre}
      />
      <Carrusel type="product" text="Smoothies (500ml)" list={list.smothies} />
      <Carrusel
        type="product"
        text="Leches Vegetales (500ml)"
        list={list.lechesVegetales}
      />
      <Carrusel
        type="product"
        text="Bebidas Adicioneles"
        list={list.bebidasAdicionales}
      />
    </React.Fragment>
  );
};

export default ListProducts;
