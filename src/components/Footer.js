import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const FooterSyled = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  border-top: black solid 1px;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;

  img {
    width: 80px;
    height: 80px;
    position: absolute;
    align-self: flex-start;
    transform: translateX(40%) translateY(-100%);
  }

  .pages {
    text-align: right;
    display: flex;
    flex-direction: column;
    max-width: 764px;
    margin-right: 10%;
  }
  .contact {
    text-align: right;
    max-width: 764px;
    display: flex;
    flex-direction: column;
    margin-right: 10%;
    list-style: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      order: 2;
      width: 150px;
      height: 150px;
      position: static;
      transform: translateX(0%) translateY(0px);
      align-self: center;
    }
    .pages {
      order: 1;
      margin-right: 0px;
      margin-left: 5%;
      width: 35%;
      align-items: flex-start;
      a {
        font-size: 20px;
      }
    }
    .contact {
      order: 3;
      margin-right: 5%;
      width: 35%;
      li {
        font-size: 20px;
      }
    }
  }
  @media (min-width: 1200px) {
    .pages {
      a {
        font-size: 22px;
      }
    }
    .contact {
      li {
        font-size: 22px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterSyled>
      <img src={logo}></img>
      <div className="pages">
        <h2>Páginas</h2>
        <Link>Home</Link>
        <Link>Productos</Link>
        <Link>Quienes somos</Link>
      </div>
      <ul className="contact">
        <h2>Contactanos</h2>
        <li>Huera Urbana Juice Detox</li>
        <li>@huertaUrbana.vsa</li>
        <li>huertaurbana.vsa@gmail.com</li>
        <li>9932397472</li>
      </ul>
    </FooterSyled>
  );
};

export default Footer;
