import React from "react";
import styled from "styled-components";
import CardsGrid from "../components/cards_grid";
import CustomTabs from "../components/custom_tabs";

const Filter = () => {
  return (
    <FilterContainer className="container">
      <CardsGrid />
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div``;
