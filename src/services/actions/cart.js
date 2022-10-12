import { baseUrl, request } from "../../utils/api";
import { v4 as uuidv4 } from 'uuid';

export const INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST';
export const INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS';
export const INGREDIENTS_FAILED = 'INGREDIENTS_FAILED';

export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const REPLACE_CONSTRUCTOR_ITEM = 'REPLACE_CONSTRUCTOR_ITEM';

export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const CLEAR_CURRENT_INGREDIENT = 'CLEAR_CURRENT_INGREDIENT';

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const SWITCH_TAB = 'SWITCH_TAB';


export const getItems = () => dispatch => {
    const url = baseUrl + 'ingredients';

    dispatch({ type: INGREDIENTS_REQUEST })
    request(url)
        .then(data => {
            dispatch({ type: INGREDIENTS_SUCCESS, data: data.data });
        })
        .catch(e => {
            dispatch({ type: INGREDIENTS_FAILED })
        });
}

export const makeOrder = (ingredients,accessToken) => dispatch => {
    const url = baseUrl + 'orders';

    dispatch({ type: ORDER_REQUEST })
    request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': accessToken,
        },
        body: JSON.stringify({
            ingredients: ingredients
        })
    })
        .then(data => {
            dispatch({ type: ORDER_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: ORDER_FAILED })
        });
}
export const addIngredient = (item) => {
    const uuid = uuidv4()
    return { type: ADD_INGREDIENT_TO_CONSTRUCTOR, item, uuid }

}
export const removeIngredient = (uuid) => {
    return { type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, uuid }
}
export const setCurrentIngredient = (item) => {
    return { type: SET_CURRENT_INGREDIENT, item }
}
export const clearOrder = () => {
    return { type: CLEAR_ORDER }
}
export const switchTab = (tab) => {
    return { type: SWITCH_TAB, tab }
}