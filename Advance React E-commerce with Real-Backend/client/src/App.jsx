import { Routes, Route } from "react-router-dom";
import "./css/main.css";
import "./css/stylesheet.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import HomeItem from "./pages/HomeItem.jsx";

import Bag from "./pages/Bag"; // Removed .jsx extension
import PageNotFound from "./pages/PageNotFound";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "./store/actions/itemsSlice.js";
import { loadingActions } from "./store/actions/loadingSlice.js";

function App() {
  const itemList = useSelector((store) => store.itemsRedux);
  const loading = useSelector((store) => store.loadingRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingActions.toggleLoading(true));
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadingActions.toggleLoading(false));
        dispatch(itemsActions.addInitialItem(data.items));
      })
      .catch((err) => {
        console.error(`Something Went Wrong: ${err.message}`);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main className="container pb-3">
        {loading ? (
          <Loader /> // Show Loader if loading is true
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <main className="item-wrapper">
                  {itemList.map((item, idx) => (
                    <HomeItem key={idx} item={item} />
                  ))}
                </main>
              }
            />
            <Route path="/bag" element={<Bag itemList={itemList} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
