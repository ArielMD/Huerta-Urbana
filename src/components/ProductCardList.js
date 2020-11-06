import React from "react";
import styled from "styled-components";
import Title from "./Title";
import ExtendProductCard from "./ExtendProductCard";
import ExtendPackageCard from "./ExtendPackageCard";

const ListStyled = styled.div`
  max-width: 725px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) and (max-width: 1200px) {
    max-width: 90%;
  }

  @media (min-width: 1200px) {
    max-width: 80%;
  }
`;

const ProductCardList = ({ list, text, type }) => {
  return (
    <React.Fragment>
      <Title text={text} />

      {type === "product" ? (
        <ListStyled>
          {list.map((product, index) => (
            <ExtendProductCard key={index} juice={product} />
          ))}
        </ListStyled>
      ) : null}

      {type === "package" ? (
        <ListStyled>
          {list.map((product, index) => (
            <ExtendPackageCard key={index} product={product} />
          ))}
        </ListStyled>
      ) : null}
    </React.Fragment>
  );
};

export default ProductCardList;
