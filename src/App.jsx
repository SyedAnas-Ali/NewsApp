import React from "react";
import CategorySelector from "./components/CategorySelector";
import NewsList from "./components/NewsList";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <div className="app">
      <h1>📰 Redux News Feed</h1>
      <CategorySelector />
      <NewsList />
      <Favorites />
    </div>
  );
}
