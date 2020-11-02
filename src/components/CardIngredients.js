import React from "react";
import styled from "styled-components";

const IngredientStyled = styled.div`
  font-size: 12px;
  background-color: #efefef;
  width: 125px;
  padding: 5px 0px;
  border-radius: 5px;
  transition: all 0.5s ease-out;
  box-shadow: lightgray 1px 1px 5px;
  img {
    width: 10px;
    height: 10px;
  }

  h3 {
    padding: 5px 0px;
    margin: 0px;
    font-size: 10px;
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px 5px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    padding-right: 5px;
  }

  @media screen and (min-width: 834px) {
    width: 125px;
    align-self: flex-end;
    h3 {
      padding: 5px 0px;
      margin: 0px;
      font-size: 12px;
      text-align: center;
    }

    ul {
      list-style: none;
      margin: 0px;
      padding: 0px 5px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
    }
    li {
      margin: 1px 0px;
    }

    img {
      margin-right: 5px;
      height: 20px;
      width: 20px;
    }
  }
`;

const Ingredientes = ({ ingredients }) => {
  return (
    <IngredientStyled>
      <h3>Ingredientes</h3>
      <ul>
        {ingredients.map((ingrediente, index) => (
          <li key={index}>
            <img src={ingrediente.imagen} alt=""></img> {ingrediente.nombre}
          </li>
        ))}
      </ul>
    </IngredientStyled>
  );
};

export default Ingredientes;
