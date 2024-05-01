import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewsCard from "./news_card";
import { Card } from "antd";
import CustomModal from "../components/custom_modal";

const CardsGrid = ({ title }) => {
  const articles = useSelector((state) => state.articles.items);
  const status = useSelector((state) => state.articles.status);
  const placeholderCount = 20;
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

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
          : articles?.map(
              (item) =>
                item.urlToImage && (
                  <NewsCard
                    key={item.url}
                    url={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    onClick={() => showModal(item)}
                  />
                )
            )}
      </StyledGrid>
      <CustomModal
        isVisible={visible}
        title={modalContent.title}
        imageUrl={modalContent.urlToImage}
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
