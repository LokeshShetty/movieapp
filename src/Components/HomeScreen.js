import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/v2/find",
    params: { title: "game of", limit: "20", sortArg: "moviemeter,asc" },
    headers: {
      "X-RapidAPI-Key": "ad7fc1f831msh044e80e65d11164p15376ajsnd121028258ed",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="main">
        {movies &&
          movies.length > 0 &&
          movies.slice(0, show ? 20 : 9).map((movie) => {
            return (
              <Link to={`/detail${movie.id}`}>
                <MovieItem
                  id={movie.id}
                  title={movie?.title}
                  url={movie?.image?.url}
                />
              </Link>
            );
          })}
      </main>
      {movies.length > 0 && (
        <div className="showdiv">
          <button className="show" onClick={() => setShow(!show)}>
            Show {show ? "less" : "more"}
          </button>
        </div>
      )}
    </div>
  );
}
