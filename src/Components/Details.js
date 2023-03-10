import React, { useEffect, useState } from "react";
import "./Details.css";
import Navbar from "./Navbar";
import SimilarMovie from "./SimilarMovie";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function Details() {
  const [data, setData] = useState();
  const [synopses, setSynopses] = useState();
  const [similar, setSimilar] = useState([]);

  const { id } = useParams();

  function toHours(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const duration = `Duration: ${hours} : ${minutes} hr`;
    return duration;
  }

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-details",
    params: { tconst: id },
    headers: {
      "X-RapidAPI-Key": "939f476536msh7ebd8f27d0a729bp1bce46jsn3ae53c96d010",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-synopses",
    params: { tconst: id },
    headers: {
      "X-RapidAPI-Key": "939f476536msh7ebd8f27d0a729bp1bce46jsn3ae53c96d010",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const options3 = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/v2/find",
    params: { title: "game of", limit: "4", sortArg: "moviemeter,asc" },
    headers: {
      "X-RapidAPI-Key": "939f476536msh7ebd8f27d0a729bp1bce46jsn3ae53c96d010",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options2)
      .then(function (response) {
        setSynopses(response?.data[0]?.text);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .request(options3)
      .then(function (response) {
        setSimilar(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  let minutes = data?.runningTimeInMinutes;

  return (
    <>
      <Navbar />
      <div className="details">
        <div className="top-1">
          <img className="specific-image" src={data?.image?.url} alt="img" />
          <div className="top-2">
            <div>
              <p className="">{data?.title}</p>
              <span style={{ display: "block" }}>action</span>
              <span style={{ display: "block" }}>
                {minutes && toHours(minutes)}
              </span>
            </div>
            <div className="buttons">
              <button className="watch">Watch now</button>
              <button className="later">Watch later</button>
            </div>
          </div>
        </div>
        <div className="synopses">
          <p>
            {synopses?.length > 600
              ? synopses?.slice(0, 1000) + "..."
              : synopses}
          </p>
        </div>
        <div className="movie-list">
          <span className="similar">Similar Movies</span>
          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
            {similar &&
              similar.length > 0 &&
              similar.map((movie) => {
                return (
                  <SimilarMovie
                    key={movie.id}
                    id={movie.id}
                    title={movie?.title}
                    url={movie?.image?.url}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
