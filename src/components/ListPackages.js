import React from "react";
import Banner from "./Banner";
import Carrusel from "./Carrusel";
import list from "../statics/paquetes";

const ListPackages = () => {
  return (
    <React.Fragment>
      <Banner text="Conoce Los Paquetes Que Tenemos Preparado Para Tí" />
      <Carrusel
        type="package"
        text="Programas Detox"
        list={list.programaDetox}
      />
      <Carrusel
        type="package"
        text="Paquetes Adicionales"
        list={list.programaDetox}
      />
    </React.Fragment>
  );
};

export default ListPackages;
