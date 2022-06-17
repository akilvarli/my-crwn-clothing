import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    // Add your reducers here
    user: userReducer,
    categories: categoriesReducer
});             