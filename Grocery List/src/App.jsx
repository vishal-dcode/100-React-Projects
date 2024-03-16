import { useEffect, useState } from "react";
import List from "./List.jsx";
import "./styles.css";

const getLocalStorage = () => {
  let item = localStorage.getItem("Item");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editIdx, setEditIdx] = useState("");

  const removeItem = (id) => {
    setItem(item.filter((itemId) => itemId.id !== id));
  };

  const editItem = (id) => {
    const selectItem = item.find((findItem) => findItem.id === id);
    setIsEdit(true);
    setEditIdx(id);
    setInputValue(selectItem.title);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (inputValue && isEdit) {
      setItem(
        item.map((items) => {
          if (items.id === editIdx) {
            return { ...items, title: inputValue };
          }
          return items;
        })
      );
      setIsEdit(!isEdit);
    } else if (inputValue) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: inputValue,
      };
      setItem([...item, newItem]);
    } else {
      alert("Please enter your item before submitting.");
    }

    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(item));
  }, [item]);

  return (
    <div className="App">
      <h3 className="title">Grocery List</h3>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter list here..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          {isEdit ? "Edit" : "Submit"}
        </button>
      </form>

      {item.length === 0 ? (
        <span className="disabled">Empty List</span>
      ) : (
        <>
          <List itemList={item} editItem={editItem} removeItem={removeItem} />
          <button
            className="clear-btn"
            onClick={() => {
              setItem([]);
            }}
          >
            Clear List
          </button>
        </>
      )}
    </div>
  );
}
