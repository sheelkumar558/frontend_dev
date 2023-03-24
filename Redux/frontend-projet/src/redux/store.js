import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducer";
import { cartAddReducer } from "./addCart/reducer";
const rootReducer = combineReducers({
  All: productReducer,
  Single: cartReducer,
  AddCart: cartAddReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
