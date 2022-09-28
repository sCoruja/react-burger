import {
    INGREDIENTS_REQUEST,
    INGREDIENTS_SUCCESS,
    INGREDIENTS_FAILED,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    SET_CURRENT_INGREDIENT,
    CLEAR_CURRENT_INGREDIENT,
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILED,
    SWITCH_TAB,
    CLEAR_ORDER,
    REPLACE_CONSTRUCTOR_ITEM
} from "../actions/cart";
import { v4 as uuidv4 } from 'uuid';
const initialState = {

    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,

    currentIngredient: {},

    constructorItems: [],
    bun: null,
    order: {},
    orderRequest: false,
    orderFailed: false,
    currentTab: 'bun'
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENTS_REQUEST:
            return {
                ...state, ingredientsRequest: true, ingredientsFailed: false

            }
        case INGREDIENTS_SUCCESS: {
            return {
                ...state, ingredientsRequest: false, ingredientsFailed: false, ingredients: action.data
            }
        }
        case INGREDIENTS_FAILED: {
            return {
                ...state, ingredientsRequest: false, ingredientsFailed: true
            }
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            const uuid = uuidv4()
            if (action.item.type !== 'bun') {
                return {
                    ...state, constructorItems: [...state.constructorItems, { ...action.item, uuid }]
                }
            } else {
                return {
                    ...state, bun: action.item
                }
            }
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            const newConstructorItems = state.constructorItems.filter(item => item.uuid !== action.uuid)
            return {
                ...state, constructorItems: newConstructorItems
            }
        }
        case REPLACE_CONSTRUCTOR_ITEM: {
            const newIndex = action.newIndex
            const oldIndex = action.oldIndex
            const newConstructorItems = [...state.constructorItems]
            newConstructorItems.splice(newIndex, 0, newConstructorItems.splice(oldIndex, 1)[0]);
            return {
                ...state, constructorItems: newConstructorItems
            }
        }
        case SET_CURRENT_INGREDIENT: {
            return {
                ...state, currentIngredient: action.item
            }
        }
        case CLEAR_CURRENT_INGREDIENT: {
            return {
                ...state, currentIngredient: {}
            }
        }
        case ORDER_REQUEST:
            return {
                ...state, orderRequest: true, orderFailed: false

            }
        case ORDER_SUCCESS: {
            return {
                ...state, orderRequest: false, orderFailed: false, order: action.data, bun: null, constructorItems: []
            }
        }
        case ORDER_FAILED: {
            return {
                ...state, orderRequest: false, orderFailed: true
            }
        }
        case CLEAR_ORDER: {
            return {
                ...state, orderRequest: false, orderFailed: false, order: {}
            }
        }
        case SWITCH_TAB: {
            return {
                ...state, currentTab: action.tab
            }
        }
        default: {
            return state;
        }
    }
};