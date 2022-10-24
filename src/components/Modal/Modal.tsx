import ReactDOM from "react-dom";
import React, { FC } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import modalStyles from "./Modal.module.css";
import { IModalProps } from "../../utils/types";

const Modal: FC<IModalProps> = ({ heading, children, onClose }) => {
  const modalRoot = document.getElementById("react-modals");
  React.useEffect(() => {
    const handleEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", handleEscapePress);
    return () => {
      document.removeEventListener("keyup", handleEscapePress);
    };
  }, [onClose]);
  return (
    modalRoot &&
    ReactDOM.createPortal(
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
    )
  );
};
export default Modal;
