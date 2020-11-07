import React from "react";
import styled from "styled-components";

const TitleStyled = styled.div`
  max-width: 725px;
  height: 40px;
  margin: auto;
  background-color: #035022;
  color: #dddddd;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 40px;
  margin-top: 20px;

  h1 {
    align-self: center;
    font-weight: 200;
    font-size: 21px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    max-width: 90%;
    height: 45px;
    margin-top: 50px;
    h1 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 80%;
    height: 50px;
    margin-top: 50px;
    h1 {
      font-size: 36px;
    }
  }
`;
const Title = ({ text }) => {
  return (
    <TitleStyled>
      <h1>{text}</h1>
    </TitleStyled>
  );
};

export default Title;
