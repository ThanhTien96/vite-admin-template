import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth'


const createReducer = combineReducers({
    auth,
});

export default createReducer;