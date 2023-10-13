import { Typography, Divider, Space } from "antd";
import clsx from "clsx";
import React from "react";
const { Title } = Typography;

export interface ISettingSectionProps {
  title?: React.ReactNode | string;
  children?: React.ReactNode;
  className?: string;
}

const SettingSection = (props: ISettingSectionProps) => {
  const { title, children, className } = props;
  return (
    <Space direction='vertical' className={clsx(className, 'px-8')}>
      {title && <Title className="mb-0" level={4}>{title}</Title>}
      <Divider className="m-0" />
      {children}
    </Space>
  );
};

export default SettingSection;
