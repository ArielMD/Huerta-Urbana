import React from "react";
import styled from "styled-components";

const FilterStyled = styled.div`
  max-width: 725px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 5%;

  button {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    border-style: none;
    background-color: #aace46;
    margin: 10px;
    outline: none;
  }

  .all {
    display: none;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    max-width: 800px;
    button {
      width: 175px;
      height: 35px;
    }

    .all {
      display: block;
    }
  }
`;

const Filter = ({ filter }) => {
  const onClick = id => {
    filter(id);
  };
  return (
    <FilterStyled>
      <h1>Filtra tus productos favoritos</h1>
      <button className="all" onClick={() => onClick(0)}>
        Todos
      </button>
      <button onClick={() => onClick(1)}>Jugos verdes</button>
      <button onClick={() => onClick(2)}>Jugos de Raiz</button>
      <button onClick={() => onClick(3)}>Shots de Jengibre</button>
      <button onClick={() => onClick(4)}>Smothies</button>
      <button onClick={() => onClick(5)}>Leches vegetales</button>
      <button onClick={() => onClick(6)}>Bebidas Adicionales</button>
    </FilterStyled>
  );
};

export default Filter;
