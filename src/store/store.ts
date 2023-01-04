import {createStore, applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";

let middleware : any = [reduxThunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware))