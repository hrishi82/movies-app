import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, overview, vote_average }) {
  const setTagColor = vote => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3 className="title">{title}</h3>
        <span className={`tag ${setTagColor(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
