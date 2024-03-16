import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ ...newName }) {
  const { id, name, label, glass } = newName;
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <section className="cocktail-ctr">
      <div key={id}>
        <figure className="cocktail-banner">
          <img
            className={isLoaded ? "image-loaded" : "image-loading"}
            src={`https://source.unsplash.com/random/?cocktail-${name}`}
            alt={name}
            onLoad={() => setIsLoaded(false)}
          />
        </figure>
        <div className="cocktail-content">
          <h1>{name}</h1>
          <p>{glass}</p>
          <span>{label}</span>
          <Link to={`/cocktail/${id}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
