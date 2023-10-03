import { AnyAction, ThunkAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit"
import createReducer from "./root";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// initial state
const preloadedState = {};

const store = configureStore({
    reducer: createReducer(),
    preloadedState
})





export type StoreState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof createReducer>;
export type StoreDispatch = typeof store.dispatch;
export type TypeDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypeThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    AnyAction
>;

// store custom hook
export const useAppDispatch = () => useDispatch<TypeDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export default store;
