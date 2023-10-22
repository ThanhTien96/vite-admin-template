import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const createReducer = combineReducers({
    authSlice,
});

export default createReducer;