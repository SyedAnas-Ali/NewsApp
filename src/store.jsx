import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/newsSlice";
import favoritesReducer from "./features/favoritesSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
