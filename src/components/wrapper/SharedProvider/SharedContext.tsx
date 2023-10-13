import { DrawerProps } from "antd";
import * as React from 'react';

export interface IContextValue {
    drawer: DrawerProps;
}

export type TSharedContextValueType = [
    IContextValue,
    React.Dispatch<React.SetStateAction<IContextValue>>
];

const Context = React.createContext<TSharedContextValueType>(null as any);

export default Context;