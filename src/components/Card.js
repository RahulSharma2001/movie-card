import React from "react";
import { FaCommentAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import "./style.css";

const Card = ({ movie }) => {
  const backgroundImage = movie.images[2][1];
  console.log(movie);

  return (
    <div className="card">
      <div style={{ color: "white" }}>
        <div className="details">
          <img width="150" height="170" src={backgroundImage} alt="banner" />
          <div className="main-d">
            <h1>{movie.title}</h1>
            <p style={{ color: "skyblue" }}>
              {movie.year} , {movie.Director[0]}
            </p>
            <div className="d-g">{movie.genre.join(" ")}</div>
          </div>
        </div>
        <p style={{ maxWidth: "60%" }}>{movie.description}</p>
        <div className="icon">
          <FaShareAlt />
          <FaHeart />
          <FaCommentAlt />
        </div>
      </div>
      <div className="right-side">
        <img src={backgroundImage} alt="banner" />
      </div>
    </div>
  );
};

export default Card;
