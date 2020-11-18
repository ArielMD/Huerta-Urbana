import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  background: #ffffff;
  width: 320px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 18px;
  box-shadow: gray 1px 1px 5px;
  padding: 20px;

  h1 {
    font-size: 18px;
    text-align: center;
    background-color: #9c1680;
    color: #ffffff;
    padding: 5px;
  }
  h2 {
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  p {
    text-align: center;
    font-weight: 800;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  ul {
    font-size: 14px;
  }

  .include {
    list-style: square inside;
  }
  .price {
    list-style: none;
    padding-bottom: 10px;
    li {
      padding-top: 2px;
      padding-bottom: 2px;

      span {
        font-weight: 600;
      }
    }
  }
`;

const ExtendPackageCard = ({ product }) => {
  return (
    <CardStyled>
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      <ul className="include">
        {product.incluye.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <ul className="price">
        <h2>Disponible para</h2>
        {product.disponible.map((dis, index) => (
          <li key={index}>
            {dis.dias}: <span>{dis.precio}</span>
          </li>
        ))}
      </ul>
    </CardStyled>
  );
};

export default ExtendPackageCard;
