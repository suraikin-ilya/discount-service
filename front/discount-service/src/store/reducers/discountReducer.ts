import { SET_DISCOUNTS, SET_DISCOUNT } from '../actionTypes'

const initialState = {
    discounts: [],
    discount: {}
};

export default function discountReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_DISCOUNTS:
            return {
                ...state,
                discounts: action.discounts
            }
        case SET_DISCOUNT:
            return {
                ...state,
                discount: action.discount
            }
        default:
            return state
    }
}