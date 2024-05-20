import { createStore, applyMiddleware } from "redux";
import { moviesRed } from "../reducers/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

//1- create store
export const storeRed = createStore(moviesRed, applyMiddleware(thunk));
