import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Shop from "./components/pages/Shop.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";

import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="body-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}
