import { cartReducer } from "./cart";
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

const initialState = {
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

describe("Cart reducet", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle INGREDIENTS_REQUEST", () => {
    expect(cartReducer(initialState, { type: INGREDIENTS_REQUEST })).toEqual({
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
    });
  });

  it("should handle INGREDIENTS_SUCCESS", () => {
    expect(
      cartReducer(initialState, { type: INGREDIENTS_SUCCESS, data: [1, 2, 3] })
    ).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: [1, 2, 3],
    });
  });

  it("should handle INGREDIENTS_FAILED", () => {
    expect(cartReducer(initialState, { type: INGREDIENTS_FAILED })).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: true,
    });
  });

  it("should handle ADD_INGREDIENT_TO_CONSTRUCTOR bun ingredient", () => {
    expect(
      cartReducer(initialState, {
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        ingredient: { type: "bun" },
      })
    ).toEqual({
      ...initialState,
      bun: { type: "bun" },
    });
  });

  it("should handle ADD_INGREDIENT_TO_CONSTRUCTOR other ingredients", () => {
    expect(
      cartReducer(
        { ...initialState, constructorItems: [{ type: "main" }] },
        { type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient: { type: "sauce" } }
      )
    ).toEqual({
      ...initialState,
      constructorItems: [{ type: "main" }, { type: "sauce" }],
    });
  });

  it("should handle REMOVE_INGREDIENT_FROM_CONSTRUCTOR", () => {
    expect(
      cartReducer(
        { ...initialState, constructorItems: [{ uuid: "111" }] },
        { type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, uuid: "111" }
      )
    ).toEqual({
      ...initialState,
      constructorItems: [],
    });
  });

  it("should handle ORDER_REQUEST", () => {
    expect(cartReducer(initialState, { type: ORDER_REQUEST })).toEqual({
      ...initialState,
      orderRequest: true,
      orderFailed: false,
    });
  });

  it("should handle ORDER_SUCCESS", () => {
    expect(
      cartReducer(
        { ...initialState, bun: {}, constructorItems: [1, 2, 3] },
        { type: ORDER_SUCCESS, data: 1234 }
      )
    ).toEqual({
      ...initialState,
      orderRequest: false,
      orderFailed: false,
      order: 1234,
      bun: null,
      constructorItems: [],
    });
  });

  it("should handle ORDER_FAILED", () => {
    expect(cartReducer(initialState, { type: ORDER_FAILED })).toEqual({
      ...initialState,
      orderRequest: false,
      orderFailed: true,
    });
  });

  it("should handle SWITCH_TAB", () => {
    expect(cartReducer(initialState, { type: SWITCH_TAB, tab: "tab" })).toEqual(
      {
        ...initialState,
        currentTab: "tab",
      }
    );
  });

  it("should handle CLEAR_ORDER", () => {
    expect(
      cartReducer({ ...initialState, order: 123 }, { type: CLEAR_ORDER })
    ).toEqual({
      ...initialState,
      orderRequest: false,
      orderFailed: false,
      order: {},
    });
  });
  
  it("should handle REPLACE_CONSTRUCTOR_ITEM", () => {
    expect(
      cartReducer(
        { ...initialState, constructorItems: [1, 2, 3] },
        { type: REPLACE_CONSTRUCTOR_ITEM, oldIndex: 1, newIndex: 2 }
      )
    ).toEqual({
      ...initialState,
      constructorItems: [1, 3, 2],
    });
  });
});
