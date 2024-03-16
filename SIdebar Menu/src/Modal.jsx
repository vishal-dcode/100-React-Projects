import { AiOutlineClose } from "react-icons/ai";

import { useContext } from "react";
import { ActiveContext } from "./context/ActiveContext";

export default function Modal() {
  const { modalActive, setModalActive } = useContext(ActiveContext);

  return (
    <div className="Modal">
      <div className={`modal-overlay ${modalActive && "modal-active"}`}>
        <div className="modal-ctr">
          <h3>Modal Content</h3>
        </div>
        <button
          className="close-btn"
          onClick={() => {
            setModalActive(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}
