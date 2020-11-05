import React from "react";
import styled from "styled-components";
import bg from "../images/bg.jpg";

const BannerStyled = styled.div`
  background-image: url(${bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #dddddd;
  width: 100%;
  height: 150px;
  margin: 21px 0px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: rgb(0, 0, 0, 0.35);
    h1 {
      text-align: center;
      font-size: 24px;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 230px;
    div {
      h1 {
        font-size: 24px;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    height: 400px;
    div {
      h1 {
        font-size: 48px;
      }
    }
  }
`;

const Banner = ({ text, children }) => {
  return (
    <BannerStyled>
      <div>
        <h1>{text}</h1>
        {children}
      </div>
    </BannerStyled>
  );
};

export default Banner;
