import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import modalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  const modalRoot = document.getElementById("react-modals");
  const onClick = (e) => {
    if (e.target === e.currentTarget) props.onClick();
  };
  return ReactDOM.createPortal(
    <div className={modalOverlayStyles.overlay} onClick={onClick}>
      {props.children}
    </div>,
    modalRoot
  );
};
ModalOverlay.propTypes = {
  heading: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default ModalOverlay;
