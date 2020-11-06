import React from "react";
import styled from "styled-components";
import hero from "../images/hero.jpg";
import logo from "../images/logo.png";

const HeroStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #dddd;

  .logo-hero {
    background-color: #ffffff;
    border-radius: 300px;
    padding: 5px;

    img {
      width: 175px;
      height: 175px;
    }
  }

  .bg-dark {
    width: 100%;
    flex: 1;
    background-color: rgb(34, 49, 63, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
      font-size: 36px;
      text-align: center;
    }

    p {
      text-align: center;
      width: 80%;
      font-size: 24px;
    }
  }

  .buttons-group {
    width: 80%;
    display: flex;
    justify-content: space-between;
    button {
      width: 150px;
      height: 56px;
      font-size: 18px;
      background-color: #035022;
      color: #ffffff;
      outline: none;
      border-radius: 10px;
      :hover {
        border: #ffffff solid 1px;
        background-color: #069c42;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    .bg-dark {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 36px;
        width: 60%;
      }
    }

    .buttons-group {
      width: 60%;
    }
  }
  @media screen and (min-width: 1200px) {
    .bg-dark {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 36px;
        width: 60%;
      }
    }

    .buttons-group {
      width: 60%;

      button {
        width: 200px;
        height: 75px;
        font-size: 24px;
        background-color: #035022;
        color: #ffffff;
      }
    }
  }
`;

const Hero = props => {
  return (
    <HeroStyled>
      {props.children}

      <div className="bg-dark">
        <h1>Más que Jugos, ¡Pura Vida!</h1>
        <div className="logo-hero">
          <img src={logo} alt="logo"></img>
        </div>
        <p>
          No dejes tu salud para después. Aumenta tus defensas de forma natural
          y deliciosa!
        </p>

        <div className="buttons-group">
          <button>Productos</button>
          <button>Paquetes</button>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
