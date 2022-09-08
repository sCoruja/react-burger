import React from "react";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import modalStyles from "./Modal.module.css";

const Modal = (props) => {
  const handleEscapePress = (e) => {
    if (e.key === "Escape") {
      props.onClose();
    }
  };
  React.useEffect(() => {
    document.addEventListener("keyup", handleEscapePress);
    return () => {
      document.removeEventListener("keyup", handleEscapePress);
    };
  }, []);
  return (
    <ModalOverlay onClick={props.onClose}>
      <div className={modalStyles.modal + " p-10"}>
        <div className={modalStyles.header}>
          <h3 className={modalStyles.heading + " text text_type_main-large"}>
            {props.heading}
          </h3>
          <CloseIcon type="primary" onClick={props.onClose} />
        </div>
        {props.children}
      </div>
    </ModalOverlay>
  );
};
Modal.propTypes = {
  heading: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
export default Modal;
