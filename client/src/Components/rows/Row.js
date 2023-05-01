import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Youtube from "react-youtube";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [tmovies, setTMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  //portion de code qui fonctionne a partir d'une condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const fetchVideos = `/movie/${movie.id}/videos?api_key=67f774b0833b55a6e223a5d8d95a6366&language=en-US`;
      const request = await axios.get(fetchVideos);
      setTMovies(request.data.results[0].key);
      setTrailerUrl(tmovies);
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
