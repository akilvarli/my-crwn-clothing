import { legacy_createStore as creatStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

const composeEnhancers = (compose(applyMiddleware(...middleWares)));

export const store = creatStore(rootReducer, undefined, composeEnhancers);