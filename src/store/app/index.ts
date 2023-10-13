import { combineReducers } from "@reduxjs/toolkit";
import theme from './theme';
import helmet from "./helmet";


const createReducer = combineReducers({
    theme,
    helmet
});

export default createReducer;