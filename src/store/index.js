// import { configureStore } from "@reduxjs/toolkit";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools, } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../redux/Reducers";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
//  export const store= configureStore({
//      reducer: rootReducer
//  })