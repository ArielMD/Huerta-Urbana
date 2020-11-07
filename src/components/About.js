import React from "react";
import styled from "styled-components";
import imagen from "../images/products/producto.jpg";

const AboutSyled = styled.main`
  max-width: 725px;
  height: 200px;
  background-color: #ffffff;
  text-align: center;
  border: #01665c solid 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  } */

  p {
    font-family: Raleway;
    font-size: 28px;
  }
`;

const SectionStyled = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 725px;
  align-items: center;
  box-shadow: gray 1px 1px 5px;

  .container {
    margin-bottom: 20px;
    h2 {
      text-align: center;
      margin: 10px;
    }
    p {
      font-family: "raleway";
    }
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;
const About = () => {
  return (
    <React.Fragment>
      <AboutSyled>
        <h1>Huerta Urbana </h1>
        <p>Conoce nuestra historia</p>
      </AboutSyled>
      <SectionStyled>
        <div className="container section-1">
          <h2>Huerta Urbana Jugos y Detox</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={imagen} alt=""></img>
      </SectionStyled>
      <SectionStyled>
        <div className="container section-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={imagen} alt=""></img>
      </SectionStyled>
    </React.Fragment>
  );
};

export default About;
