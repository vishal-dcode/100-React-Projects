import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="container navbar-wrapper">
      <div className="navbar">
        <NavLink className="nav-logo" to="/">
          LOGO
        </NavLink>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop Now</NavLink>
        </nav>
      </div>
    </section>
  );
}
