import React from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../features/newsSlice";

export default function CategorySelector() {
  const dispatch = useDispatch();
  const categories = ["business", "sports", "technology", "health"];

  return (
    <div className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => dispatch(fetchNews(cat))}>
          {cat}
        </button>
      ))}
    </div>
  );
}
