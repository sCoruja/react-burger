import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import modalStyles from "./Modal.module.css";

const Modal = ({ heading, children, onClose }) => {
  const modalRoot = document.getElementById("react-modals");

  React.useEffect(() => {
    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", handleEscapePress);
    return () => {
      document.removeEventListener("keyup", handleEscapePress);
    };
  }, [onClose]);
  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <div className={modalStyles.modal + " p-10"}>
        <div className={modalStyles.header}>
          <h3 className={modalStyles.heading + " text text_type_main-large"}>
            {heading}
          </h3>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};
Modal.propTypes = {
  heading: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default Modal;
