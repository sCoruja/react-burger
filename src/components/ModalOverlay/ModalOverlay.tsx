import React, { FC, MouseEvent } from "react";
import { IModalOverlayProps } from "../../utils/types";

import modalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay: FC<IModalOverlayProps> = ({ onClick, children }) => {
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
