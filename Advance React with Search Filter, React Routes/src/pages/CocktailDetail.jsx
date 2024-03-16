import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Loading from "../components/Loading";

const urlAPI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function CocktailDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dataDB, setDataDB] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${urlAPI}${id}`)
      .then((res) => res.json())
      .then(({ drinks }) => {
        setDataDB(drinks); // Assuming the API returns an object with 'drinks' property
        setLoading(false);
      })
      .catch((err) => console.log(`Something went wrong in API ${err}`));
  }, [id]);

  const [firstDrink] = dataDB;
  const {
    strDrink: name,
    strAlcoholic: batch,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions
  } = firstDrink || {}; // Destructure the first drink or use an empty object if dataDB is empty

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="cocktail-detail">
      <Link to="/" className="close-btn">
        X
      </Link>
      <img
        src={`https://source.unsplash.com/random/?cocktail-${name}`}
        alt={name}
      />
      <div className="cocktail-data-wrapper">
        <div className="cocktail-data">
          <h3>Name:</h3>
          <p>{name}</p>
        </div>
        <div className="cocktail-data">
          <h3>Category:</h3>
          <p>{category}</p>
        </div>
        <div className="cocktail-data">
          <h3>Info:</h3>
          <p>{batch}</p>
        </div>
        <div className="cocktail-data">
          <h3>Glass:</h3>
          <p>{glass}</p>
        </div>
        <div className="cocktail-data">
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </section>
  );
}
