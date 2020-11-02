import React from "react";
import styled from "styled-components";
import CardIngredients from "./CardIngredients";

const CardStyled = styled.div`
  background: #ffffff;
  width: 125px;
  height: 190px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: gray 1px 1px 5px;
  margin: 0px;

  h1 {
    font-size: 12px;
    margin: 0px;
    padding: 2px;
    font-weight: 300;
  }

  .img-card {
    width: 125px;
    height: 125px;
  }

  .bg-image {
    width: 125px;
    height: 125px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    div {
      align-self: flex-end;
      transform: translateY(25px);
    }
  }

  span {
    font-size: 12px;
    font-weight: bold;
    margin: 3px 0px;
    padding: 30px 0px 0px 0px;
  }

  /* :hover {
    transform: scale(1.2);
  } */

  @media screen and (min-width: 834px) {
    width: 210px;
    height: 275px;
    h1 {
      font-size: 16px;
      margin: 0px;
      padding: 10px;
    }

    .img-card {
      width: 210px;
      height: 200px;
    }

    .bg-image {
      width: 210px;
      height: 210px;
      display: flex;
      flex-direction: row;
      div {
        transform: translateX(140px);
      }
    }

    span {
      font-size: 12;
      font-weight: bold;
      padding: 10px 0px 0px 0px;
    }
  }
`;

const CardProduct = ({ juice }) => {
  return (
    <CardStyled image={juice.imagen}>
      <h1>{juice.nombre}</h1>
      <div className="bg-image">
        <CardIngredients ingredients={juice.ingredientes}></CardIngredients>
      </div>
      <span>${juice.precio}</span>
    </CardStyled>
  );
};

export default CardProduct;
