import { configureStore } from "@reduxjs/toolkit"
import createReducer from "./root";



const store = configureStore({
    reducer: {},
})





export type StoreState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof createReducer>;