import React from "react";
import styled from "styled-components";
import image from "../images/products/producto.jpg";

const CardStyled = styled.div`
  width: 125px;
  height: 180px;
  background-color: #ffffff;
  text-align: center;
  margin: 20px;
  border-radius: 5px;
  box-shadow: gray 1px 1px 5px;

  h1 {
    font-size: 12px;
    margin: 0px;
    padding: 11px 0px;
    font-weight: 300;
  }

  .bg-imagen {
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    width: 125px;
    height: 130px;
  }

  .bg-black {
    width: 100%;
    height: 130px;
    background-color: rgb(34, 49, 63, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p {
      font-size: 12px;
      color: #ddd;
      font-weight: lighter;
      padding-right: 3px;
      padding-left: 3px;
    }

    button {
      font-size: 8px;
      width: 60px;
      height: 22px;
      border-radius: 5px;
      background-color: #01665c;
      color: #ffffff;
      border-style: none;
      border-color: #aace46;
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 834px) {
    width: 210px;
    height: 275px;

    h1 {
      font-size: 16px;
      margin: 0px;
      padding: 20px 0px;
    }

    .bg-black {
      height: 195px;
      width: 210px;
    }

    .bg-imagen {
      height: 195px;
      width: 210px;
      p {
        font-size: 16px;
      }
      button {
        font-size: 12px;
        width: 100px;
        height: 30px;
        margin: 20px 10px 0px 0px;
      }
    }
  }
`;

const CardPackages = ({ pack }) => {
  return (
    <CardStyled image={image}>
      <h1>{pack.nombre}</h1>
      <div className="bg-imagen">
        <div className="bg-black">
          <p>{pack.descripcion}</p>

          <button>Ver más</button>
        </div>
      </div>
    </CardStyled>
  );
};

export default CardPackages;
