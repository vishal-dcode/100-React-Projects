import { HiMenuAlt2 } from "react-icons/hi";

import { useContext } from "react";
import { ActiveContext } from "./context/ActiveContext";

export default function Home() {
  const { setModalActive, setSidebarActive } = useContext(ActiveContext);

  return (
    <div className="Home">
      <button className="hamburger" onClick={() => setSidebarActive(true)}>
        <HiMenuAlt2 />
      </button>
      <button onClick={() => setModalActive(true)} className="btn">
        Show Modal
      </button>
    </div>
  );
}
