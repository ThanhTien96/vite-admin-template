import { combineReducers } from "@reduxjs/toolkit";
import theme from './theme';
import helmet from "./helmet";
import alert from "./alert";


const createReducer = combineReducers({
    theme,
    helmet,
    alert,
});

export default createReducer;