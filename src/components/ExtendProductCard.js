import React from "react";
import styled from "styled-components";
import IngredientsCard from "./IngredientsCard";

const CardStyled = styled.div`
  background: #ffffff;
  width: 320px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 18px;
  box-shadow: gray 1px 1px 5px;

  h1 {
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #12827e;
    color: #fff;
    padding: 5px;
  }
  .wrapper {
    display: flex;
  }

  .bg-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 125px;
      height: 125px;
      border-radius: 10px;
    }
  }

  .content {
    width: 50%;
    font-size: 14px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }

  /* :hover {
    transform: scale(1.2);
  } */

  /* @media screen and (min-width: 834px) {
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
  } */
`;

const ExtendProductCard = ({ juice }) => {
  return (
    <CardStyled image={juice.imagen}>
      <h1>{juice.nombre}</h1>
      <div className="wrapper">
        <p className="content">{juice.beneficios.map(ben => ben + ", ")}</p>
        <div className="bg-image">
          <img src={juice.imagen} alt="juice" />
        </div>
      </div>
      <span>${juice.precio}</span>
      <IngredientsCard
        ingredients={juice.ingredientes}
        extend={true}
      ></IngredientsCard>
    </CardStyled>
  );
};

export default ExtendProductCard;
