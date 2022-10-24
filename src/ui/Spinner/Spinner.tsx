import "./Spinner.scss";
import { FC } from "react";
const Spinner: FC<{ size: "small" | "medium" | "large" }> = ({ size }) => {
  return (
    <svg className={"spinner spinner_size_" + size} viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};
export default Spinner;
