import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewsCard from "./news_card";
import { Card } from "antd";

const CardsGrid = ({ title }) => {
  const articles = useSelector((state) => state.articles.items);
  const status = useSelector((state) => state.articles.status);
  const placeholderCount = 20;
  return (
    <GridContainer>
      <GridTitle>{title}</GridTitle>
      <StyledGrid>
        {status === "loading"
          ? Array.from({ length: placeholderCount }, (_, index) => (
              <Card
                key={index}
                style={{ width: 300, marginTop: 16 }}
                loading={true}
              />
            ))
          : articles?.map(
              (item) =>
                item.urlToImage && (
                  <NewsCard
                    key={item.url}
                    url={item.urlToImage}
                    title={item.title}
                    description={item.description}
                  />
                )
            )}
      </StyledGrid>
    </GridContainer>
  );
};

export default CardsGrid;

const GridContainer = styled.div``;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
const GridTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  color: #000000a1;
`;
