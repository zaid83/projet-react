import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/header/Navbar";
import HomeBanner from "./Components/banner/HomeBanner";
import Row from "./Components/rows/Row";
import requests from "./requests";
import axios from "./axios";

function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="App">
        <header>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Navbar />
          <HomeBanner fetchMovie={movie} />
        </header>
        <section className="row__section">
          <Row title="Films à venir" fetchUrl={requests.fetchUpcomingMovies} />
          <Row title="Tendances" fetchUrl={requests.fetchTrending} />
          <Row title="Top Series" fetchUrl={requests.fetchTopSeries} />
          <Row title="Top Films" fetchUrl={requests.fetchTopMovies} />
        </section>
      </div>
    </div>
  );
}

export default App;

/*   const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []); */
