// src/features/articles/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NEW_YORK_TIMES_API_KEY } from "../api-consts";

export const fetchNewYorkTimesArticles = createAsyncThunk(
  "articles/fetchNewYorkTimesArticles",
  async (query, { rejectWithValue }) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NEW_YORK_TIMES_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newYorkTimesApiArticlesReducer = createSlice({
  name: "newYorkTimesArticles",
  initialState: {
    items: [],
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewYorkTimesArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewYorkTimesArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchNewYorkTimesArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default newYorkTimesApiArticlesReducer.reducer;
