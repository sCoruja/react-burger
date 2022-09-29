import "./Spinner.scss";
import PropTypes from "prop-types";
const Spinner = ({ size }) => {
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
Spinner.propType = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
};
export default Spinner;
