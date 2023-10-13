import React, {useState} from "react";
import {
  ProfileOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider, Popover, Space, Typography } from "antd";
import { useNavigate } from "react-router";
import { pagePaths } from "constants";
import clsx from "clsx";

const { Text } = Typography;

interface MenuItemProps {
  key: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface MenuProps {
  items: (MenuItemProps | null)[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <Space direction='vertical' className='w-full'>
      {items &&
        items.map((ele, index: React.Key) => {
          if (!ele) {
            return <Divider key={index} className="my-0" />;
          }
          return (
            <Button
              type="text"
              icon={ele.icon}
              onClick={ele.onClick}
              key={ele.key}
              className={clsx(ele.className, "w-full text-start")}
            >
              {ele.label}
            </Button>
          );
        })}
    </Space>
  );
};

const AccountButton = () => {
    const navigate = useNavigate();

    // handle navigate
    const handleNavigate = (slug: string) => {
        navigate(slug)
    }
  const menuItems: (MenuItemProps | null)[] = [
    {
      key: "profile",
      label: "Profile",
      icon: <ProfileOutlined />,
      onClick: () => handleNavigate(pagePaths.profile)
    },
    null,
    {
      key: "setting",
      label: "Setting",
      icon: <SettingOutlined />,
      onClick: () => handleNavigate(`${pagePaths.setting}/${pagePaths.account}`)
    },
    {
      key: "help",
      label: "Help",
      icon: <InfoCircleOutlined />,
    },
    null,
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      className: 'text-red-500'
    },
  ];

  return (
    <Popover
      placement="bottomRight"
      title={"Account"}
      content={<Menu items={menuItems} />}
      trigger="click"
    >
      <Button type="text" className="h-[45px] px-2">
        <div className="flex flex-row gap-4 items-center">
          <Avatar icon={<UserOutlined />} />
          <Text>Anonymous</Text>
        </div>
      </Button>
    </Popover>
  );
};

export default AccountButton;
