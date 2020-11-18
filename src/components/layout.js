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
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />

        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
      </Helmet>

      {props.children}
    </React.Fragment>
  );
};

export default Layout;
