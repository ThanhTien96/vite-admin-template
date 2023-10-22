import { createSlice } from "@reduxjs/toolkit";
import { IS_AUTH } from "constants/auth.constant";


export interface AuthSliceProps {
    loading: boolean,
    status: IS_AUTH.auth | IS_AUTH.unAuth,
    profile?: any;
}

const initialState: AuthSliceProps = {
    loading: false,
    status: IS_AUTH.auth,
    profile: undefined
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {}
});


export default authSlice.reducer;