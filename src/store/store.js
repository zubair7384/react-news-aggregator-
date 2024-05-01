import { configureStore } from "@reduxjs/toolkit";
import newsApiArticlesReducer from "../features/news_api_slice";
import newYorkTimesApiArticlesReducer from "../features/new_york_times_slice";

export const store = configureStore({
  reducer: {
    articles: newsApiArticlesReducer,
    newYorkTimesArticles: newYorkTimesApiArticlesReducer,
  },
});
