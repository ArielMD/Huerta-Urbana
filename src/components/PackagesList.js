import React from "react";
import Banner from "./Banner";
import Carrusel from "./Carrusel";
import list from "../statics/paquetes";

const ListPackages = () => {
  return (
    <React.Fragment>
      <Banner
        text="Conoce Los Paquetes Que Tenemos Preparado Para Tí"
        type="packages"
      />
      {list.map(product => (
        <Carrusel
          key={product.nombre}
          type="package"
          text={product.nombre}
          list={product.productos}
        />
      ))}
    </React.Fragment>
  );
};

export default ListPackages;
