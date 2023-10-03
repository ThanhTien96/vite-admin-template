import { ThemeConfig } from "antd";
import { dark, base } from "./collection";

export interface ThemeProps {
    [themeKey: string] : ThemeConfig;
}

const instance: ThemeProps = {
    default: base,
    dark
};

export default instance;