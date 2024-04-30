// src/features/articles/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NEWS_API_KEY } from "../api-consts";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (query, { rejectWithValue }) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`;

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

const newsApiArticlesReducer = createSlice({
  name: "articles",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default newsApiArticlesReducer.reducer;
