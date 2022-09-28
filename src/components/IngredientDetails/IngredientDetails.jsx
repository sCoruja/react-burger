import PropTypes from "prop-types";
import ingredientDetailsStyles from "./IngredientDetails.module.css";

const IngredientDetails = ({ data }) => {
  return (
    <div className={ingredientDetailsStyles.container}>
      <img
        src={data.image_large}
        alt={data.name}
        className={ingredientDetailsStyles.image}
      />
      <h3
        className={
          ingredientDetailsStyles.title +
          " text text_type_main-medium mt-4 mb-8"
        }
      >
        {data.name}
      </h3>
      <div className={ingredientDetailsStyles.nutrions}>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.calories}
          </span>
        </div>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.proteins}
          </span>
        </div>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.fat}
          </span>
        </div>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
};
IngredientDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
export default IngredientDetails;
