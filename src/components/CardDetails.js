import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/cardDetails.css";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://my.afrus.app/template/index.js");
    document.head.appendChild(script);
  }, []);
  return (
    <>
      <div className="content__details">
        <div className="content__2">
          <h1>{name}</h1>

          <img src={image} alt="" />
          <div className="badge bg-danger fs-5">{status}</div>

          <div className="content">
            <div className="gender">Gender: {gender}</div>
            <div className="location">Location: {location?.name}</div>
            <div className="origin">Origin: {origin?.name}</div>
            <div className="species">Specie: {species}</div>
          </div>
        </div>
        <div
          className="form__afrus"
          id="afrus-container-form"
          data-form="63eb5735-0d30-4503-8f5e-63f7c16b036e"
        ></div>
      </div>
    </>
  );
};

export default CardDetails;
