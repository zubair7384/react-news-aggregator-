import React from "react";
import { Input } from "antd";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const { Search } = Input;

const CustomSearch = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <SearchWrapper isHome={isHome}>
      <StyledSearch
        placeholder="Search for free news"
        onSearch={handleSearch}
      />
    </SearchWrapper>
  );
};

export default CustomSearch;

const StyledSearch = styled(Search)`
  input {
    padding: 15px;
    &::placeholder {
      color: #0000009e;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .ant-btn.css-dev-only-do-not-override-kghr11.ant-btn-default.ant-btn-icon-only.ant-input-search-button,
  :where(.css-kghr11).ant-input-search .ant-input-search-button {
    padding: 10px;
    box-sizing: content-box;
  }
`;
const SearchWrapper = styled.div`
  width: ${(props) => (props.isHome ? "100%" : "50%")};
`;
