import { createSlice } from "@reduxjs/toolkit";
import { EIS_AUTH } from "constants/auth.constant";


export interface IAuthSliceProps {
    loading: boolean,
    status: EIS_AUTH.auth | EIS_AUTH.unAuth,
    profile?: any;
}

const initialState: IAuthSliceProps = {
    loading: false,
    status: EIS_AUTH.auth,
    profile: undefined
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {}
});


export default authSlice.reducer;