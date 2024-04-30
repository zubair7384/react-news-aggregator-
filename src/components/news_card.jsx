import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const NewsCard = ({ url, title, description }) => {
  return (
    <StyledCard hoverable cover={<img alt="example" src={url} />}>
      <Meta title={title} description={description} />
    </StyledCard>
  );
};

export default NewsCard;

const StyledCard = styled(Card)`
  .ant-card {
    width: 100%;
  }
`;
