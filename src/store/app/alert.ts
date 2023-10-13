import { createSlice } from "@reduxjs/toolkit";


type TStatusType = "error" | "info" | "warning";

export interface IAlertSliceProps {
    status: TStatusType;
    message: string;
    logs: [TStatusType, string][],
}


const initialState: IAlertSliceProps = {
    status: "info",
    message: "N/A",
    logs: []
};

const alertSlice = createSlice({
    name: "alertSlice",
    initialState,
    reducers: {
        setAlert: (state, {payload}) => {
            state.status = payload.status;
            state.message = payload.message;
            /** Store logs in temporary */
            state.logs = [...state.logs, [payload.status, payload.message]]
        }
    }
});

export const {setAlert} = alertSlice.actions;

export default alertSlice.reducer;