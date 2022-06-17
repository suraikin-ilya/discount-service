import {combineReducers} from 'redux';
import discountReducer from './discountReducer';
import userReducer from "./userReducer";

export default combineReducers({
    user: userReducer,
    discount: discountReducer
})