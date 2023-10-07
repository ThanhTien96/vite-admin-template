import { MenuProps } from "antd";
import { pagePaths } from "constants";
import {ProjectOutlined} from '@ant-design/icons'

export type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?:React.ReactNode,
    children?: MenuItem[],
    theme?: 'light' | 'dark',
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
        theme
    }
}

const items: MenuItem[] = [
    getItem('Dash Board', pagePaths.home, <ProjectOutlined />),    
];


export default items;