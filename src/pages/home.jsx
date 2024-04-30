import React, { useEffect } from "react";
import CustomTabs from "../components/custom_tabs";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../features/news_api_slice";
import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.articles.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArticles("latest"));
    }
  }, [status, dispatch]);

  return (
    <HomeWrapper className="container">
      <CustomTabs />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div``;
