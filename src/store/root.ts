
import { combineReducers } from "@reduxjs/toolkit";
import app from './app';

interface AsyncReducersProps {
    [key: string]: any
}

const rootReducer = {
    app,
};

const createReducer = (asyncReducers?: AsyncReducersProps) => combineReducers({
    ...asyncReducers,
    ...rootReducer
});

export default createReducer;