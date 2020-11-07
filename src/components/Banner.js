import React from "react";
import styled from "styled-components";
import bg from "../images/bg.jpg";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";

const BannerStyled = styled.div`
  background-image: url(${bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #dddddd;
  width: 100%;
  height: 150px;
  margin: 21px 0px;
  margin-top: 80px;

  .bg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    background-color: rgb(0, 0, 0, 0.35);
    h1 {
      text-align: center;
      font-size: 24px;
    }
    p {
      text-align: center;
    }
  }

  .social {
    width: 70%;
    display: flex;
    justify-content: space-around;
    img {
      width: 50px;
      height: 50px;
      border-radius: 100px;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 230px;
    .bg {
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 21px;
      }
      .social {
        width: 50%;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    height: 400px;
    .bg {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 36px;
      }
      .social {
        width: 50%;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
`;

const Banner = ({ text, social, children }) => {
  return (
    <BannerStyled>
      <div className="bg">
        <h1>{text}</h1>
        {social ? (
          <React.Fragment>
            <p>Realiza tus pedidos a traves de nuestras redes sociales</p>
            <div className="social">
              <a href="https://www.instagram.com/huertaurbana.vsa/">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/HuertaUrbanavsa%20/">
                <img src={facebook} alt="Facebook" />
              </a>

              <a href="https://www.facebook.com/HuertaUrbanavsa%20/">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </BannerStyled>
  );
};

export default Banner;
