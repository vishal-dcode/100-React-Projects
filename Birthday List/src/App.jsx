import { useState } from "react";

import List from "./List.jsx";
import listDb from "./data.json";

import "./styles.css";

export default function App() {
  // useState is only use to clear the data when clicked on button
  const [people, setPeople] = useState(listDb);

  return (
    <div className="App">
      <section className="container">
        <h1>{people.length} Birthday Today</h1>
        {/* Pass listDB instead of people to remove useState hook */}
        <List people={people} />
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear List
        </button>
      </section>
    </div>
  );
}
