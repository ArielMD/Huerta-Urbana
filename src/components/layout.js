import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import bg from "../images/pattern.png";

const GlobalStyled = createGlobalStyle`
*{
  margin:0px;
  padding: 0px;
}

body{
  font-family: 'Open Sans', sans-serif;
  background-color: #F5F5F5;
  /* background-image: url(${bg}); */
}

`;

const Layout = props => {
  return (
    <React.Fragment>
      <GlobalStyled />

      <Helmet>
        <title>Huerta Urbana</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      {props.children}
    </React.Fragment>
  );
};

export default Layout;
