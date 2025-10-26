import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=demo`
    );
    const data = await response.json();
    return data.articles || [];
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default newsSlice.reducer;
