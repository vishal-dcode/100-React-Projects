import React, { useState } from "react";

import testimonialDB from "./testimonialData.json";
import { GrFormNext } from "react-icons/gr";

import "./styles.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const { name, message } = testimonialDB[index];

  return (
    <div className="App">
      <h1>Testimonial Cards</h1>
      <div className="ctr">
        <div>
          <p>"{message}"</p>
          <i className="author">- {name}</i>
        </div>
      </div>

      <div className="icon-wrapper">
        <div className="icon">
          <GrFormNext
            className={`icon-previous ${index === 0 ? "disabled" : ""}`}
            onClick={() => {
              setIndex(index - 1);
            }}
          />
        </div>
        <div className="icon">
          <GrFormNext
            className={`icon-next ${
              index === testimonialDB.length - 1 ? "disabled" : ""
            }`}
            onClick={() => {
              setIndex(index + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
