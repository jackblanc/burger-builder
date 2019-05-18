import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredients = updateObject(state.ingredients,
                { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 });
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIngredientsR = updateObject(state.ingredients,
                { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 });
            const updatedStateR = {
                ingredients: updatedIngredientsR,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedStateR);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    lettuce: action.ingredients.lettuce,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4,
                error: false,
                building: false
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true })
        default:
            return state;
    }
};

export default reducer;