import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  ${props =>
    props.size == "big" &&
    css`
      width: 200px;
      height: 75px;
    `}

  ${props =>
    props.size == "medium" &&
    css`
      width: 150px;
      height: 56px;
      font-size: 18px;
    `}

    ${props =>
    props.color == "green" &&
    css`
      background-color: #035022;
      color: #ffffff;
    `}

    ${props =>
    props.color == "green" &&
    css`
      background-color: #01665c;
      color: #ffffff;
    `}
`;

const Button = ({ size, color, children }) => {
  return (
    <ButtonStyled size={size} color={color}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
