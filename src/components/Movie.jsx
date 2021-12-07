import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-info">
        <h3 className="title">{title}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
