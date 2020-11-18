import React from "react";
import Banner from "./Banner";
import packages from "../statics/paquetes";
import ProductCardList from "./ProductCardList";

const ExtendPackageList = () => {
  return (
    <React.Fragment>
      <Banner
        text="Conoce Los Paquetes Que Tenemos Preparado Para Tí"
        type="packages"
      />
      {packages.map(pack => (
        <ProductCardList
          key={pack.nombre}
          type="package"
          list={pack.productos}
          text={pack.nombre}
        />
      ))}
      {/* <ProductCardList type="package" list={packages.programaDetox} />
      <ProductCardList type="packages" list={packages.programaDetox} /> */}
    </React.Fragment>
  );
};

export default ExtendPackageList;
