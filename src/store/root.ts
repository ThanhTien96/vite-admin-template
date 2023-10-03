
import { combineReducers } from "@reduxjs/toolkit";


interface AsyncReducersProps {
    [key: string]: any
}

const rootReducer = {};

const createReducer = (asyncReducers: AsyncReducersProps) => combineReducers({
    ...asyncReducers,
    ...rootReducer
});

export default createReducer;