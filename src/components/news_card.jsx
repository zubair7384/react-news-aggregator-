import React from "react";
import { Card, Tooltip } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const NewsCard = ({ url, title, description, onClick }) => {
  return (
    <StyledCard
      hoverable
      cover={<img alt="example" src={url} />}
      onClick={onClick}
    >
      <Meta
        title={title}
        description={
          <Tooltip title={description}>
            <EllipsisText>{description}</EllipsisText>
          </Tooltip>
        }
      />
    </StyledCard>
  );
};

export default NewsCard;

const StyledCard = styled(Card)`
  .ant-card {
    width: 100%;
  }
  .ant-card-cover {
    max-height: 200px;
    overflow: hidden;
  }
`;

const EllipsisText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
  line-height: 1.5em;
`;
