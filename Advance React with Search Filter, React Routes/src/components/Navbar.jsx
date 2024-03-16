import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/" className="logo">
        <h1>LOGO</h1>
      </Link>

      <div className="menu-list">
        <NavLink to="/" className="menu-item">
          Home
        </NavLink>
        <NavLink to="/about" className="menu-item">
          About
        </NavLink>
      </div>
    </nav>
  );
}
