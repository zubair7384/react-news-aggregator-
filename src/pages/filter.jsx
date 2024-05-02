import React, { useEffect, useContext } from "react";
import CardsGrid from "../components/cards_grid";
import FilterButtons from "../components/filter_buttons";
import FilterHeader from "../components/filter_header";
import { useDispatch } from "react-redux";
import {
  fetchArticles,
  fetchNewYorkTimesArticles,
  getArticlesByCategory,
} from "../features/news_api_slice";
import styled from "styled-components";
import ArticlesContext from "../contexts/articles_contexts";

const Filter = () => {
  const dispatch = useDispatch();
  const { searchValue, setSearchValue, filterButtonValue, apiName } =
    useContext(ArticlesContext);
  console.log(searchValue, "searchValue");
  useEffect(() => {
    let query = "all";
    if (apiName === "newsApi") {
      if (searchValue) {
        dispatch(getArticlesByCategory(searchValue));
      } else if (filterButtonValue) {
        dispatch(fetchArticles(filterButtonValue));
      }
    } else {
      dispatch(fetchNewYorkTimesArticles(query));
    }

    setSearchValue("");
  }, [dispatch, searchValue, filterButtonValue, setSearchValue, apiName]);

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
