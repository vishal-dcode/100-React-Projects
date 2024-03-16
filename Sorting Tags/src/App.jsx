import React, { useState } from "react";

import Menu from "./Menu";

import dataDB from "./data.json";
import "./styles.css";

export default function App() {
  const [menuItems, setMenuItems] = useState(dataDB.menu);

  const allCategories = [
    "All",
    ...new Set(dataDB.menu.map((data) => data.category)),
  ];

  const filterItems = (cateName) => {
    if (cateName === "All") {
      setMenuItems(dataDB.menu);
      return;
    }
    const newItems = dataDB.menu.filter((data) => data.category === cateName);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <h2 className="title">Select Category</h2>
      {allCategories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
      <Menu items={menuItems} />
    </div>
  );
}
