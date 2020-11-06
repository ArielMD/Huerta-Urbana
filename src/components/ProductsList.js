import React from "react";
import Banner from "./Banner";
import Carrusel from "./Carrusel";
import list from "../statics/productos";

const ListProducts = () => {
  return (
    <React.Fragment>
      <Banner text="Conoce Nuestros Saludables Productos" />

      {list.map(product => (
        <Carrusel
          key={product.id}
          type="product"
          text={product.nombre}
          list={product.productos}
        />
      ))}
    </React.Fragment>
  );
};

export default ListProducts;
