import React, { FC, MouseEvent } from "react";

import modalOverlayStyles from "./ModalOverlay.module.css";

type TModalOverlayProps = {
  onClick: () => void;
};

const ModalOverlay: FC<TModalOverlayProps> = ({ onClick, children }) => {
  const handleClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClick();
  };
  return (
    <div className={modalOverlayStyles.overlay} onClick={handleClick}>
      {children}
    </div>
  );
};
export default ModalOverlay;
