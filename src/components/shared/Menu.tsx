import { Button, ButtonProps, Space, Typography } from 'antd';
import clsx from 'clsx';

const {Text} = Typography;

export type TMenuProps = {
    title?: string;
    size?: "small" | "large" | "medium";
    direction?: "horizontal" | "vertical";
    items?: (ButtonProps & {key?: string})[];
    selected?: string;
}

const Menu = (props: TMenuProps) => {
    const {title, size, direction = "vertical", items, selected} = props;
   
  const getDefaultItems: (props: ButtonProps) => ButtonProps = (items) => {
    return {
        ...items,
        className: clsx("w-full text-start", items.className),
        size: size && items.size,
        type: items.type || "text",
    };
  };
  
    return (
        <Space direction={direction} className='w-full'>
        {title && <Text type='secondary'>{title}</Text>}
        {items &&
          items.map((item) => (
            <Button
              {...getDefaultItems(item)}
              type={selected === item.key ? "default" : "text"}
            />
          ))}
      </Space>
  )
}

export default Menu