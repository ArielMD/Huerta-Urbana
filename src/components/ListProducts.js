import React from "react";
import Banner from "./Banner";
import Carrusel from "./Carrusel";
import list from "../statics/productos";

const ListProducts = () => {
  return (
    <React.Fragment>
      <Banner text="Conoce Nuestros Saludables Productos" />
      <Carrusel text="jugos Verdes (500ml)" list={list.jugosVerdes} />
      <Carrusel text="Jugos de Raiz (500ml)" list={list.jugosRaiz} />
      <Carrusel text="Shots de Jengibre (60ml)" list={list.shotsJengibre} />
      <Carrusel text="Smoothies (500ml)" list={list.smothies} />
      <Carrusel text="Leches Vegetales (500ml)" list={list.lechesVegetales} />
      <Carrusel text="Bebidas Adicioneles" list={list.bebidasAdicionales} />
    </React.Fragment>
  );
};

export default ListProducts;
