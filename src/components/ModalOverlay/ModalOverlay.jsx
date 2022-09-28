import PropTypes from "prop-types";

import modalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay = ({ onClick, children }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClick();
  };
  return (
    <div className={modalOverlayStyles.overlay} onClick={handleClick}>
      {children}
    </div>
  );
};
ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default ModalOverlay;
