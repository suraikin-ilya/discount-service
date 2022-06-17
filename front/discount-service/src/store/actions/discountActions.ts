import { SET_DISCOUNTS, SET_DISCOUNT } from '../actionTypes'

export function setCustomDiscounts(discounts: any) {
    return {
        type: SET_DISCOUNTS,
        discounts
    }
}

export function setCustomDiscount(discount: any) {
    return {
        type: SET_DISCOUNT,
        discount
    }
}