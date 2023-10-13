import { createSlice } from "@reduxjs/toolkit";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type ThemeType = 'default' | 'dark';

interface ThemeSliceStateType {
    selected: ThemeType;
    colorPrimary: string;
    space?: { size?: number | SizeType };
  direction?: "ltr" | "rtl";
  componentSize?: SizeType;
}


const initialState: ThemeSliceStateType = {
    selected: 'dark',
    colorPrimary: "#39caf5",
    space: {
        size: "middle",
      },
      direction: "ltr",
      componentSize: "middle",
};


const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        changeTheme: (state, {payload}) => {
            state.selected = payload; 
        },
        changeColorPrimary: (state, {payload}) => {
            state.colorPrimary = payload;
        }          
    }
});

export const {
    changeTheme,
    changeColorPrimary
} = themeSlice.actions;

export default themeSlice.reducer;