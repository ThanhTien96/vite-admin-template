
import { combineReducers } from "@reduxjs/toolkit";
import app from './app';
import common from './common';

interface AsyncReducersProps {
    [key: string]: any
}

const rootReducer = {
    app,
    common,
};

const createReducer = (asyncReducers?: AsyncReducersProps) => combineReducers({
    ...asyncReducers,
    ...rootReducer
});

export default createReducer;