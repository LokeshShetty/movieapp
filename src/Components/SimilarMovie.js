import React from "react";
import "./SimilarMovie.css";
import { Link } from "react-router-dom";

export default function SimilarMovie(props) {
  return (
    <div className="d-card-container">
      <div className="d-card-img-container">
        <img className="d-card-img" src={props?.url} alt="movie-img" />
      </div>
      <div className="d-content">
        <div>
          <span className="d-title">{props?.title}</span>
        </div>
        <div>
          <Link className="d-play" to={`/detail${props.id}`}>
            Play now
          </Link>
        </div>
      </div>
    </div>
  );
}
