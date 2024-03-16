import { links, socials } from "./sidebarDB.js";
import { AiOutlineClose } from "react-icons/ai";

import { useContext } from "react";
import { ActiveContext } from "./context/ActiveContext";

export default function Sidebar() {
  const { sidebarActive, setSidebarActive } = useContext(ActiveContext);

  return (
    <aside className={`sidebar ${sidebarActive && "sidebar-active"}`}>
      <div className="logo">
        <h1>LOGO</h1>
      </div>

      <button
        className="close-btn"
        onClick={() => {
          setSidebarActive(false);
        }}
      >
        <AiOutlineClose />
      </button>

      <div className="sidebar-ctr">
        <div className="menu-list">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.url} className="menu-items">
                <span className="menu-icons">{link.icon}</span>
                <h5>{link.title}</h5>
              </a>
            );
          })}
        </div>

        <div className="social-list">
          {socials.map((social, index) => {
            return (
              <a
                className="social-items"
                key={index}
                href={social.url}
                title={social.title}
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
