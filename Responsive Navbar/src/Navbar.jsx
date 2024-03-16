import { CgMenuRight } from "react-icons/cg";
import { links } from "./menuDB.js";
import React, { useRef } from "react";

export default function Navbar() {
  const linkActive = useRef(null);

  const handleClick = () => {
    linkActive.current.classList.toggle("active");
  };

  return (
    <nav className="Navbar">
      <h1>LOGO</h1>

      <div onClick={handleClick} className="hamburger">
        <CgMenuRight />
      </div>

      <div className="menu-list" ref={linkActive}>
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
