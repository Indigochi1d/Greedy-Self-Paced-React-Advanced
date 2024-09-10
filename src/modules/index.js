import {combineReducers} from 'redux'
import isAddModalSlice from "./slices/isAddModalSlice.js";
import isModalSlice from "./slices/isModalSlice.js";
import restaurantsSlice from "./slices/restaurantsSlice.js";
import categorySlice from "./slices/categorySlice.js";

const rootReducer = combineReducers({
    isAddModalSlice : isAddModalSlice,
    isModalSlice : isModalSlice,
    restaurants: restaurantsSlice,
    category: categorySlice,
});

export default rootReducer;