import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import CocktailDetail from "./pages/CocktailDetail";
import Error from "./pages/Error";

import "./styles.css";
import "./styleSheet.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<CocktailDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
