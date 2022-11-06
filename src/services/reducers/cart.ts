import { TCartActions } from "../actions/cart";
import {
  INGREDIENTS_REQUEST,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_FAILED,
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILED,
  SWITCH_TAB,
  CLEAR_ORDER,
  REPLACE_CONSTRUCTOR_ITEM,
} from "../constants";
import { ICartState } from "../types";
import { TIngredient } from "../types/data";
const initialState: ICartState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  currentIngredient: undefined,

  constructorItems: [],
  bun: undefined,
  order: undefined,
  orderRequest: false,
  orderFailed: false,
  currentTab: "bun",
};

export const cartReducer = (state = initialState, action: TCartActions) => {
  switch (action.type) {
    case INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    case INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.data,
      };
    }
    case INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      if (action.ingredient.type !== "bun") {
        return {
          ...state,
          constructorItems: [
            ...state.constructorItems,
            { ...action.ingredient, uuid: action.uuid },
          ],
        };
      } else {
        return {
          ...state,
          bun: action.ingredient,
        };
      }
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      const newConstructorItems = state.constructorItems.filter(
        (item: TIngredient) => item.uuid !== action.uuid
      );
      return {
        ...state,
        constructorItems: newConstructorItems,
      };
    }
    case REPLACE_CONSTRUCTOR_ITEM: {
      const newIndex = action.newIndex;
      const oldIndex = action.oldIndex;
      const newConstructorItems = [...state.constructorItems];
      newConstructorItems.splice(
        newIndex,
        0,
        newConstructorItems.splice(oldIndex, 1)[0]
      );
      return {
        ...state,
        constructorItems: newConstructorItems,
      };
    }
    case ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    case ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.data,
        bun: null,
        constructorItems: [],
      };
    }
    case ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: {},
      };
    }
    case SWITCH_TAB: {
      return {
        ...state,
        currentTab: action.tab,
      };
    }
    default: {
      return state;
    }
  }
};
