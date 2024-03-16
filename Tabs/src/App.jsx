import { useState } from "react";
import localDB from "./data.json";
import "./styles.css";

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <section className="App">
      <aside className="left">
        {localDB.map((localDB, idx) => {
          return (
            <h3
              key={idx}
              className={`${idx === index ? "active" : null}`}
              onClick={() => {
                setIndex(idx);
              }}
            >
              {localDB.company}
            </h3>
          );
        })}
      </aside>

      <div className="right">
        <div>
          <h2 className="company-position">{localDB[index].position}</h2>
          <div>
            <p className="company-name">{localDB[index].company}</p>
            <span className="company-date">{localDB[index].date}</span>
          </div>
        </div>
        <p className="company-duty">
          {localDB[index].duties.map((duty) => (
            <ul>
              <li>{duty}</li>
            </ul>
          ))}
        </p>
      </div>
    </section>
  );
}
