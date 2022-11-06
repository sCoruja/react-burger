import { baseUrl, request } from "../api";
import { v4 as uuidv4 } from "uuid";
import {
  INGREDIENTS_REQUEST,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_FAILED,
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REPLACE_CONSTRUCTOR_ITEM,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILED,
  CLEAR_ORDER,
  SWITCH_TAB,
} from "../constants";
import { TIngredient, TOrder, TRequestErrorExeption } from "../types/data";
import { AppDispatch, AppThunk } from "../types";

export interface IGetIngredientsAction {
  readonly type: typeof INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof INGREDIENTS_SUCCESS;
  readonly data: ReadonlyArray<TIngredient>;
}
export interface IGetIngredientsFailedAction {
  readonly type: typeof INGREDIENTS_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
  readonly ingredient: TIngredient;
  readonly uuid: string;
}
export interface IRemoveIngredientAction {
  readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  readonly uuid: string;
}
export interface IReplaceIngredientAction {
  readonly type: typeof REPLACE_CONSTRUCTOR_ITEM;
  readonly oldIndex: number;
  readonly newIndex: number;
}
export interface IMakeOrderAction {
  readonly type: typeof ORDER_REQUEST;
}
export interface IMakeOrderSuccessAction {
  readonly type: typeof ORDER_SUCCESS;
  readonly data: TOrder;
}
export interface IMakeOrderFailedAction {
  readonly type: typeof ORDER_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IClearOrderAction {
  readonly type: typeof CLEAR_ORDER;
}
export interface ISwitchTabAction {
  readonly type: typeof SWITCH_TAB;
  readonly tab: string;
}

export type TCartActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IAddIngredientAction
  | IRemoveIngredientAction
  | IReplaceIngredientAction
  | IMakeOrderAction
  | IMakeOrderSuccessAction
  | IMakeOrderFailedAction
  | IClearOrderAction
  | ISwitchTabAction;

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: INGREDIENTS_REQUEST,
});
export const getIngredientsSuccessAction = (
  data: ReadonlyArray<TIngredient>
): IGetIngredientsSuccessAction => ({
  type: INGREDIENTS_SUCCESS,
  data: data,
});
export const getIngredientsFailedAction = (
  data: TRequestErrorExeption
): IGetIngredientsFailedAction => ({
  type: INGREDIENTS_FAILED,
  data: data,
});
export const makeOrderAction = (): IMakeOrderAction => ({
  type: ORDER_REQUEST,
});
export const makeOrderSuccessAction = (
  data: TOrder
): IMakeOrderSuccessAction => ({
  type: ORDER_SUCCESS,
  data: data,
});
export const makeOrderFailedAction = (
  data: TRequestErrorExeption
): IMakeOrderFailedAction => ({
  type: ORDER_FAILED,
  data: data,
});
export const addIngredientAction = (
  ingredient: TIngredient
): IAddIngredientAction => {
  const uuid = uuidv4();
  return { type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient, uuid };
};
export const removeIngredientAction = (
  uuid: string
): IRemoveIngredientAction => {
  return { type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, uuid };
};
export const replaceIngredientAction = (
  oldIndex: number,
  newIndex: number
): IReplaceIngredientAction => {
  return { type: REPLACE_CONSTRUCTOR_ITEM, oldIndex, newIndex };
};
export const clearOrderAction = (): IClearOrderAction => {
  return { type: CLEAR_ORDER };
};
export const switchTab = (tab: string): ISwitchTabAction => {
  return { type: SWITCH_TAB, tab };
};

export const getIngredientsThunk: AppThunk = () => (dispatch: AppDispatch) => {
  const url = baseUrl + "ingredients";

  dispatch(getIngredientsAction());
  request(url, {})
    .then((data) => {
      dispatch(getIngredientsSuccessAction(data.data));
    })
    .catch((e) => {
      dispatch(getIngredientsFailedAction(e));
    });
};

export const makeOrderThunk: AppThunk = (
  ingredients: ReadonlyArray<string>,
  accessToken: string
) => (dispatch: AppDispatch) => {
  const url = baseUrl + "orders";

  dispatch(makeOrderAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  })
    .then((data) => {
      dispatch(makeOrderSuccessAction(data));
    })
    .catch((e) => {
      dispatch(makeOrderFailedAction(e));
    });
};
