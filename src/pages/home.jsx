import React, { useEffect, useContext } from "react";
import CustomTabs from "../components/custom_tabs";
// import FilterHeader from "../components/filter_header";
import { useDispatch } from "react-redux";
import {
  fetchArticles,
  fetchNewYorkTimesArticles,
} from "../features/news_api_slice";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ArticlesContext from "../contexts/articles_contexts";

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue, apiName } = useContext(ArticlesContext);
  const location = useLocation();

  useEffect(() => {
    const query = searchValue.trim() ? searchValue : "latest and trending";
    if (apiName === "newsApi") {
      dispatch(fetchArticles(query));
    } else {
      dispatch(fetchNewYorkTimesArticles(query));
    }
  }, [dispatch, searchValue, location.pathname, apiName]);

  return (
    <HomeWrapper className="container">
      <CustomTabs />
      {/* <FilterHeader filterButtonValue="Latest and Trending New" /> */}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div``;
