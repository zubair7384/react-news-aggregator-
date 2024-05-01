import React, { useEffect, useContext } from "react";
import CustomTabs from "../components/custom_tabs";
import FilterHeader from "../components/filter_header";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../features/news_api_slice";
import styled from "styled-components";
import ArticlesContext from "../contexts/articles_contexts";

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = useContext(ArticlesContext);

  useEffect(() => {
    const query = searchValue.trim() ? searchValue : "latest and trending";
    dispatch(fetchArticles(query));
  }, [dispatch, searchValue]);

  return (
    <HomeWrapper className="container">
      <CustomTabs />
      <FilterHeader filterButtonValue="Latest and Trending New" />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div``;
