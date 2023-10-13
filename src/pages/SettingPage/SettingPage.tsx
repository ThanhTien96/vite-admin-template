import  { TMenuProps } from "components/shared/Menu";
import {Menu} from "components/shared";
import useHelmet from "hooks/useHelmet";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import {
  FormatPainterOutlined,
  UserOutlined,
  GroupOutlined,
  NotificationOutlined,
  CoffeeOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { PlainLayout } from "components/layouts/ChildLayout/PlainLayout";
import { COPY_RIGHT } from "constants";
import { Col, Divider, Row, Space } from "antd";

export type SettingPageProps = {
  children?: React.ReactNode;
};

const SettingPage: React.FC<SettingPageProps> = (props) => {
  useHelmet({
    title: "App - Setting",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (url: string) => navigate(url);
  const menus: (TMenuProps & { key: string })[] = [
    {
      key: "general",
      items: [
        {
          key: "/setting/account",
          children: "Account",
          icon: <UserOutlined />,
          onClick: () => handleNavigate("account"),
        },
        {
          key: "/setting/appearance",
          children: "Appearance",
          icon: <FormatPainterOutlined />,
          onClick: () => handleNavigate("appearance"),
        },
        {
          key: "/setting/accessibility",
          children: "Accessibility",
          icon: <GroupOutlined />,
        },
        {
          key: "/settings/notifications",
          children: "Notifications",
          icon: <NotificationOutlined />,
        },
      ],
    },
    {
      key: "access",
      title: "Access",
      items: [
        {
          key: "/setting/sessions",
          children: "Sessions",
          icon: <CoffeeOutlined />,
        },
        {
          key: "/setting/authen",
          children: "Password and authen",
          icon: <IdcardOutlined />,
        },
      ],
    },
    {
      key: "security",
      title: "Security",
      items: [
        {
          key: "/settings/policy",
          children: "Policy",
          icon: <SafetyCertificateOutlined />,
        },
      ],
    },
  ];

  return (
    <PlainLayout
      className="bg-inherit"
      headerprops={{
        title: "Settings",
      }}
      footerprops={{
        children: COPY_RIGHT,
        className: "text-center",
      }}
    >
      <Row gutter={[8, 8]}>
        <Col span={4}>
          <Space direction="vertical" className="w-full">
            {menus.map((value, index) => {
              const isLastElement = index === menus.length - 1;

              if (isLastElement) {
                return <React.Fragment key={index} ><Menu selected={location.pathname} {...value} /></React.Fragment>;
              }

              return (
                <React.Fragment key={index}>
                  <Menu selected={location.pathname} {...value} />
                  <Divider className="m-0" />
                </React.Fragment>
              );
            })}
          </Space>
        </Col>
        <Col span={20}>
          <div className="w-full max-w-[768px]">{props.children}</div>
        </Col>
      </Row>
    </PlainLayout>
  );
};

export default SettingPage;
