import React, { useContext } from "react";
import styled from "styled-components";
import { Select } from "antd";
import ArticlesContext from "../contexts/articles_contexts";

const FilterHeader = ({ filterButtonValue }) => {
  const { setFilterButtonValue } = useContext(ArticlesContext);

  const handleApiChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleTypeChange = (value) => {
    setFilterButtonValue(value);
  };

  return (
    <StyledFilterHeaderWrapper className="flex-between">
      <h2>{filterButtonValue}</h2>
      <div className="buttons-wrapper">
        <StyledSelect
          defaultValue="newsApi"
          style={{ width: 120 }}
          onChange={handleApiChange}
          options={[
            { value: "newsApi", label: "News Api" },
            { value: "openNews", label: "Open News" },
            { value: "newsCred", label: "News Cred" },
          ]}
        />
        <StyledSelect
          defaultValue="popular"
          style={{ width: 120 }}
          onChange={handleTypeChange}
          options={[
            { value: "Popular", label: "Popular" },
            { value: "Newest", label: "Newest" },
          ]}
        />
      </div>
    </StyledFilterHeaderWrapper>
  );
};

export default FilterHeader;

const StyledFilterHeaderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  h2 {
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 0;
    color: #2c343e;
    fill: #2c343e;
    border-bottom: 4px solid #2c343e;
    line-height: 53px;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 43px;
    }
  }
  .buttons-wrapper {
    display: flex;
    gap: 12px;
  }
`;
const StyledSelect = styled(Select)`
  height: 44px;
  .ant-select-selector {
    border-color: 00000030 !important;
  }
  .ant-select-selection-item {
    font-weight: 600;
  }
`;