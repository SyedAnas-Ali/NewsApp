import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favoritesSlice";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="favorites">
      <h2>Saved Articles</h2>
      {favorites.length === 0 && <p>No saved articles yet.</p>}
      {favorites.map((article) => (
        <div key={article.title} className="fav-card">
          <h4>{article.title}</h4>
          <button onClick={() => dispatch(removeFavorite(article.title))}>
            🗑 Remove
          </button>
        </div>
      ))}
    </div>
  );
}
