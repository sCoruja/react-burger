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
    const url = "https://norma.nomoreparties.space/api/ingredients";

    dispatch({ type: INGREDIENTS_REQUEST })
    fetch(url)
        .then(response => {
            if (response.ok)
                return response.json();
            return Promise.reject(`Ошибка ${response.status}`);
        })
        .then(data => {
            dispatch({ type: INGREDIENTS_SUCCESS, data: data.data });
        })
        .catch(e => {
            dispatch({ type: INGREDIENTS_FAILED })
        });
}

export const makeOrder = (ingredients) => dispatch => {
    const url = "https://norma.nomoreparties.space/api/orders";

    dispatch({ type: ORDER_REQUEST })
    fetch(url,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredients: ingredients
        })
    })
        .then(response => {
            if (response.ok)
                return response.json();
            return Promise.reject(`Ошибка ${response.status}`);
        })
        .then(data => {
            console.log(data)
            dispatch({ type: ORDER_SUCCESS, data: data });
        })
        .catch(e => {
            console.log(e)
            dispatch({ type: ORDER_FAILED })
        });
}