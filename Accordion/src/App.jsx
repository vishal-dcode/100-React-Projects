import "./styles.css";

import dataDB from "./data.json";
import { useState } from "react";

export default function App() {
  const [showInfo, setShowInfo] = useState(0);

  return (
    <div className="App">
      <h1>Accordion Cards</h1>
      {dataDB.map((data, id) => {
        return (
          <section
            key={id}
            className="container"
            onClick={() => {
              setShowInfo(showInfo === id ? null : id);
            }}
          >
            <h4>{data.question}</h4>
            {/* {showInfo === id ? <p>{data.answer}</p> : null} */}
            {showInfo === id && <p>{data.answer}</p>}
          </section>
        );
      })}
    </div>
  );
}
