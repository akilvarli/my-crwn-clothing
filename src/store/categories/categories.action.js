import { createAction } from "../../utils/reducer/utils.reducer";
import CATEGORIES_TYPES from "./categories.types";

export const setCategoriesMap = (category) => createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, category);