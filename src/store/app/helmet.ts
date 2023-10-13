import { createSlice } from "@reduxjs/toolkit";


type TMetaType = {
    name?: string;
    content?: string;
    charSet?: string;
}

type TLinkType = {
    rel?: string;
    href?: string;
}

export interface IHelmetProps {
    title?: string;
    meta?: TMetaType[];
    link?: TLinkType[];
}

const initialState: IHelmetProps = {
    title: "Project Name",
};

const helmetSlice = createSlice({
    name:"helmetSlice",
    initialState,
    reducers: {
        setHelmet: (state,  {payload}) => {
            state.title = payload.title;
            state.link = payload.link;
            state.meta = payload.meta;
        }
    }
});


export const { 
    setHelmet,
} = helmetSlice.actions;

export default helmetSlice.reducer;