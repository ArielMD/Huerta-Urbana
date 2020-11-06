import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import close from "../images/cerrar.png";
import menu from "../images/menu.png";
import { Link } from "gatsby";

const Nav = styled.nav`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: #ffffff;

  .nav-menu {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 80vw;
    background-color: #ffffff;

    .menu-item {
      margin: 0px 20px 0px 20px;
      padding: 5px;
      text-decoration: none;
      color: #000000;
      &:last-child {
        padding-right: 0px;
      }
      :hover {
        color: #035022;
      }
    }
  }

  .active {
    border-bottom: #000000 solid 2px;
  }

  .nav-logo {
    width: 85px;
    height: 85px;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: flex;
    justify-content: space-between;

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      position: absolute;
      left: ${props => (!props.state ? "-100%" : "0%")};
      top: 85px;
      transition: all 0.5s ease;
      border-top: #c4c4c4 solid 1px;

      .menu-item {
        align-self: auto;
        text-align: center;
        padding: 20px;
        margin: 10px;

        &:last-child {
          padding-right: 20px;
        }
        :hover {
          background-color: #035022;
          color: #ffffff;
        }
      }
    }

    .menu-icon {
      display: block;
      margin-right: 5%;
      width: 40px;
      height: 40px;
    }

    .nav-logo {
      margin-left: 5%;
    }
  } ;
`;

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(prevState => !prevState);
  };

  return (
    <Nav state={state}>
      <img className="nav-logo" src={logo} alt="" />

      <img
        className="menu-icon"
        src={state ? close : menu}
        onClick={handleState}
      />

      <ul className="nav-menu">
        <Link className="menu-item" to={"/"} activeClassName="active">
          Home
        </Link>

        <Link className="menu-item" to={"/Products"} activeClassName="active">
          Productos
        </Link>

        <Link className="menu-item" to={"/AboutUs"} activeClassName="active">
          Nosotros
        </Link>

        <Link className="menu-item" to={"#contact"} activeClassName="active">
          Contactanos
        </Link>
      </ul>
    </Nav>
  );
};

export default Navbar;
