import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardProduct from "./ProductCard";
import CardPackages from "./PackagesCard";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Title from "./Title";

const CarruselStyled = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SwiperStyled = styled(Swiper)`
  max-width: 725px;
  @media (min-width: 768px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
`;

SwiperCore.use([Navigation]);

const Carrusel = ({ list, text, type }) => {
  const [state, setState] = useState(0);
  console.log(state);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setState(2);
  //     }
  //     if (768 < window.innerWidth && window.innerWidth < 1200) {
  //       setState(3);
  //     }
  //     if (1200 < window.innerWidth) {
  //       setState(4);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <CarruselStyled>
      <Title text={text} />
      <SwiperStyled
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        {list.map(product => {
          return (
            <SwiperSlide>
              {type === "product" ? <CardProduct juice={product} /> : null}
              {type === "package" ? <CardPackages pack={product} /> : null}
            </SwiperSlide>
          );
        })}
      </SwiperStyled>
    </CarruselStyled>
  );
};

export default Carrusel;
