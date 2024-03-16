import React, { useEffect, useState } from "react";
import "./styles.css";

import List from "./List.jsx";

const urlAPI = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const removeCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  useEffect(() => {
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Something Went Wrong", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Fetching Tourist</h1>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <List cards={cards} removeCard={removeCard} />
      )}
      {cards.length === 0 ? <span>Empty Card</span> : ""}
    </div>
  );
}
