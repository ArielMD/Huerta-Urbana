import React from "react";
import styled from "styled-components";
import imagen from "../images/hero.jpg";

const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  .section-1,
  .section-2,
  .section-3 {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    article {
      padding: 20px;
      h1 {
        margin-bottom: 10px;
        span {
          color: #035022;
        }
      }

      p {
        font-family: "Raleway", sans-serif;
      }
    }
    img {
      align-self: center;
      width: 150px;
      height: 150px;
    }
  }

  .section-1 {
    order: 1;
  }

  .section-2 {
    order: 2;
    article {
      order: 2;
    }
    img {
      order: 1;
    }
  }
  .section-3 {
    order: 3;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
    margin: auto;

    .section-1,
    .section-2,
    .section-3 {
      article {
        padding: 20px;
        h1 {
          margin-bottom: 10px;
          font-size: 32px;
          span {
            color: #035022;
          }
        }

        p {
          font-size: 22px;
        }
      }
      img {
        width: 250px;
        height: 250px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 80%;
    margin: auto;
    .section-1,
    .section-2,
    .section-3 {
      border-radius: 5px;
      article {
        padding: 20px;
        h1 {
          margin-bottom: 10px;
          font-size: 36px;
          span {
            color: #035022;
          }
        }

        p {
          font-size: 28px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
      }
      img {
        height: 300px;
        order: 2;
        object-fit: cover;
        object-position: center center;
        justify-self: flex-end;
      }
    }
    .section-1,
    .section-2 {
      flex-direction: column;
      justify-content: space-between;
      article {
        order: 1;
      }
      img {
        width: 100%;
      }
    }
    .section-3 {
      grid-column: 1/-1;
      align-items: center;
      img {
        width: 50%;
      }
      article {
        width: 50%;
      }
    }
  }
`;

const Info = () => {
  return (
    <InfoStyled>
      <div className="section-1">
        <article>
          <h1>
            ¿Qué es <span>Detox?</span>
          </h1>
          <p>
            Detox es más que un jugo, elaborado de ingredientes organicos ayuda
            a limpiar el organismo y eliminar toxinas, así como incrementar la
            absorción de vitaminas y antioxidantes.
          </p>
        </article>
        <img src={imagen} alt=""></img>
      </div>
      <div className="section-2">
        <article>
          <h1>
            Prensado en <span>frío</span>
          </h1>
          <p>
            El prensado en frío permite que nuestros productos conserven sus
            nutrientes, vitaminas y enzimas hasta 72 horas
          </p>
        </article>
        <img src={imagen} alt=""></img>
      </div>
      <div className="section-3">
        <article>
          <h1>
            Nuestros <span>productos</span>
          </h1>
          <p>
            Detox es más que un jugo, elaborado de ingredientes organicos ayuda
            a limpiar el organismo y eliminar toxinas, así como incrementar la
            absorción de vitaminas y antioxidantes.
          </p>
        </article>
        <img src={imagen} alt=""></img>
      </div>
    </InfoStyled>
  );
};

export default Info;
