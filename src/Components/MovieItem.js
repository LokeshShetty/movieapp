import React from "react";
import "./MovieItem.css";

export default function MovieItem(props) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img-container">
          <img className="card-img" src={props.url} alt="movie-img" />
        </div>
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="play">
            <a className="anchor" href="/">
              Play now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
