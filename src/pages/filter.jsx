import React, { useEffect, useContext } from "react";
import CardsGrid from "../components/cards_grid";
import FilterButtons from "../components/filter_buttons";
import FilterHeader from "../components/filter_header";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../features/news_api_slice";
import styled from "styled-components";
import ArticlesContext from "../contexts/articles_contexts";

const Filter = () => {
  const dispatch = useDispatch();
  const { searchValue, filterButtonValue } = useContext(ArticlesContext);

  useEffect(() => {
    let query = "all";
    if (searchValue.trim()) {
      query = searchValue;
    } else if (filterButtonValue) {
      query = filterButtonValue;
    }
    dispatch(fetchArticles(query));
  }, [dispatch, searchValue, filterButtonValue]);

  return (
    <FilterContainer className="container">
      <FilterButtons />
      <FilterHeader filterButtonValue={filterButtonValue} />
      <CardsGrid />
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div``;
