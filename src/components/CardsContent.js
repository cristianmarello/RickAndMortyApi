import React from "react";
import { Link } from "react-router-dom";
import "../styles/cardsContents.css";

const CardsContent = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, status, location } = x;
      return (
        <Link className="card__style" to={`${page}${id}`} key={id}>
          <div className="content__card">
            <div className="card__content" key={id}>
              <div className="status__card">{status}</div>
              <img className="img_first" src={image} alt="imagen"></img>
              <div className="name__card">{name}</div>

              <div className="location__card">{location.name}</div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};
export default CardsContent;
