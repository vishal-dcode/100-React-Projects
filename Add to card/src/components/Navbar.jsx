import React from "react";
import useGlobalContext from "../context/context.jsx";
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function Navbar() {
  const { quantity } = useGlobalContext();

  return (
    <nav className="Navbar">
      <h1>LOGO</h1>
      <a href="/" className="card-ctr">
        <RiShoppingCart2Fill />
        <span className="cart-batch">{quantity}</span>
      </a>
    </nav>
  );
}
