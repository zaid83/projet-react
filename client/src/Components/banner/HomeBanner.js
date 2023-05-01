import React, { useEffect, useState } from "react";

function HomeBanner({ fetchMovie }) {
  return (
    <section className="banner">
      <h2 className="banner__title">
        {fetchMovie?.title || fetchMovie?.name || fetchMovie?.original_name}
      </h2>
      <h4>
        <span>{fetchMovie?.release_date || fetchMovie?.first_air_date}</span>
        <span>
          <i>{Math.floor(fetchMovie.vote_average * 10) / 10}</i>
        </span>
        <span>{fetchMovie.original_language}</span>
        <span>{fetchMovie.media_type}</span>
      </h4>
      <p className="banner__overview">{fetchMovie.overview}</p>
      <div className="banner__buttons">
        <button className="homeButton">Play</button>
        <a href="favourite/id">
          <i className="fa-regular fa-heart"></i>
        </a>
      </div>
    </section>
  );
}

export default HomeBanner;
