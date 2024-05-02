import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewsCard from "./news_card";
import { Card } from "antd";
import CustomModal from "../components/custom_modal";
import ArticlesContext from "../contexts/articles_contexts";

const CardsGrid = ({ title }) => {
  const articles = useSelector((state) => state.articles.items);
  // const nytArticles = useSelector(
  //   (state) => state.newYorkTimesArticles.newYorkTimesData
  // );
  // const nytStatus = useSelector((state) => state.newYorkTimesArticles.status);

  const status = useSelector((state) => state.articles.status);
  const { searchValue, apiName } = useContext(ArticlesContext);

  const placeholderCount = 20;
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // const myNytArticlesList = nytArticles.map((item) => ({
  //   url: item.web_url,
  //   urlToImage: item.multimedia[0]?.url
  //     ? `https://static01.nyt.com/${item.multimedia[0]?.url}`
  //     : "",
  //   title: item.headline.main,
  //   description: item.abstract,
  //   source: { name: item.source },
  // }));
  const showModal = (item) => {
    setModalContent(item);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <GridContainer>
      <StyledGrid>
        {status === "loading"
          ? Array.from({ length: placeholderCount }, (_, index) => (
              <Card
                key={index}
                style={{ width: "100%", marginTop: 16 }}
                loading={true}
              />
            ))
          : articles?.map((item) => (
              <NewsCard
                key={item.key}
                imageUrl={item.urlToImage}
                url={item.url}
                title={item.title}
                description={item.description}
                sourceName={item.source}
                onClick={(event) => {
                  event.stopPropagation();
                  showModal(item);
                }}
              />
            ))}
      </StyledGrid>
      <CustomModal
        isVisible={visible}
        title={modalContent.title}
        imageUrl={modalContent.urlToImage}
        url={modalContent.url}
        content={modalContent.content}
        description={modalContent.description}
        onOk={handleOk}
        onCancel={handleCancel}
      />
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
