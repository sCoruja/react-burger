import { useMemo } from "react";
import { useParams } from "react-router";
import { useSelector } from "../../services/hooks";
import ingredientDetailsStyles from "./IngredientDetails.module.css";

const IngredientDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useSelector((store) => store.cart);
  const currentIngredient = useMemo(() => {
    return ingredients?.find((item) => item._id === id);
  }, [ingredients, id]);
  return currentIngredient ? (
    <div className={ingredientDetailsStyles.container}>
      <img
        src={currentIngredient.image_large}
        alt={currentIngredient.name}
        className={ingredientDetailsStyles.image}
      />
      <h3
        className={
          ingredientDetailsStyles.title +
          " text text_type_main-medium mt-4 mb-8"
        }
      >
        {currentIngredient.name}
      </h3>
      <div className={ingredientDetailsStyles.nutrions}>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.calories}
          </span>
        </div>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.proteins}
          </span>
        </div>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.fat}
          </span>
        </div>
        <div className={ingredientDetailsStyles.nutrion}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default IngredientDetails;
