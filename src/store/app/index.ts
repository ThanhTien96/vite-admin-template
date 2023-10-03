import { combineReducers } from "@reduxjs/toolkit";
import theme from './theme';

const createReducer = combineReducers({
    theme,
});

export default createReducer;