import PropTypes from "prop-types";

import modalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  const onClick = (e) => {
    if (e.target === e.currentTarget) props.onClick();
  };
  return (
    <div className={modalOverlayStyles.overlay} onClick={onClick}>
      {props.children}
    </div>
  );
};
ModalOverlay.propTypes = {
  heading: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default ModalOverlay;
