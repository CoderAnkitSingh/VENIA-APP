import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children, setIsModalOpen }) => {
  return createPortal(
    <>
      <div
        className="modal-backdrop"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="modal-content">{children}</div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
