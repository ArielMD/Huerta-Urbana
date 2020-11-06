import React from "react";
import styled from "styled-components";
import Banner from "./Banner";

const LocationStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 725px;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 30px;
  box-shadow: gray 1px 1px 5px;
  .contact {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #ffffff;
    text-align: center;
  }

  .map {
    background-color: red;
    width: 100%;
    height: 350px;
  }

  @media (min-width: 768px) {
    max-width: 90%;
    flex-direction: row;

    .contact {
    }
  }
  @media (min-width: 1200px) {
    max-width: 80%;
  }
`;

const Location = () => {
  return (
    <React.Fragment>
      <Banner text="¿Te Interesan Nuestros Productos?" social></Banner>
      <LocationStyled>
        <div className="contact">
          <h1>Contamos con servicio a domicilio (6km)</h1>
          <p>
            Venustiano Carranza 527 colonia, Gil y Saenz, 86080 Villahermosa,
            Tab.
          </p>
          <h2>Horarios</h2>
          <p>Lunes a Viernes: 8:00 - 18:00</p>
          <p>Sabado y Domingo: Cerrado</p>
        </div>
        <div className="map"> mapa</div>
      </LocationStyled>
    </React.Fragment>
  );
};

export default Location;
