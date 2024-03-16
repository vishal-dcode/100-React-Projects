import React, { useState } from "react";
import Home from "./Home.jsx";
import Modal from "./Modal.jsx";
import Sidebar from "./Sidebar.jsx";
import "./styles.css";
import { ActiveContext } from "./context/ActiveContext";

export default function App() {
  const [modalActive, setModalActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div>
      <ActiveContext.Provider
        value={{ modalActive, setModalActive, sidebarActive, setSidebarActive }}
      >
        <Home />
        <Modal />
        <Sidebar />
      </ActiveContext.Provider>
    </div>
  );
}
