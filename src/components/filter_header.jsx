import React from "react";
import styled from "styled-components";
import { Select } from "antd";

const FilterHeader = ({ filterButtonValue }) => {
  const handleApiChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleTypeChange = (value) => {
    console.log(`selected ${value}`);
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
            { value: "popular", label: "Popular" },
            { value: "newest", label: "Newest" },
          ]}
        />
      </div>
    </StyledFilterHeaderWrapper>
  );
};

export default FilterHeader;

const StyledFilterHeaderWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 0;
    color: #000;
    border-bottom: 2px solid #000;
    line-height: 38px;
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
