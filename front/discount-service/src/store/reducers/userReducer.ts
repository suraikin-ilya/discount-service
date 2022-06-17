import { GET_USER } from '../actionTypes'

const initialState = {
    user: {
        isAuth: false
    }
};

export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}