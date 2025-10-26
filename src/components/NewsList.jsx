import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../features/favoritesSlice";

export default function NewsList() {
  const { articles, status } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  if (status === "loading") return <p className="status">Loading...</p>;
  if (status === "failed")
    return <p className="status">Failed to load news.</p>;

  return (
    <div className="news-list">
      {articles.map((article) => (
        <div key={article.title} className="news-card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <button onClick={() => dispatch(addFavorite(article))}>
            ❤️ Save
          </button>
        </div>
      ))}
    </div>
  );
}
