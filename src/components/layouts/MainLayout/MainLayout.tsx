import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, Typography } from "antd";
import {
  NotificationButton,
  SearchEngine,
  menus,
  QuestionButton,
  AccountButton,
} from "./partials";
import { useNavigate } from "react-router";
import { Footer } from "antd/es/layout/layout";
import { COPY_RIGHT } from "constants";
const { Header, Sider, Content } = Layout;
import "./AppLayout.style.less";
import { useAppSelector } from "store";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { token } = theme.useToken();

  // handle navigate
  const handleNavigate = ({ key: path }: { key: React.Key }) => {
    navigate(path as string);
  };

  const handleToggle = (value: boolean) => setCollapsed(value);

  return (
    <Layout hasSider className="h-screen flex-row">
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          background: token?.Layout?.siderBg,
        }}
        onCollapse={handleToggle}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          className="border-none"
          mode="inline"
          onClick={handleNavigate}
          defaultSelectedKeys={["1"]}
          items={menus}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header">
          {/* right items */}
          <div className="flex items-center justify-around gap-4">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 32,
                height: 32,
              }}
            />
            <SearchEngine />
          </div>
          {/* left items */}
          <div className="flex justify-end items-center gap-4">
            <QuestionButton />
            <NotificationButton />
            <AccountButton />
          </div>
        </Header>
        <Content className="h-auto overflow-y-scroll main-container">
          {children}
        </Content>
        <Footer style={{ textAlign: "center", padding: 5 }}>
          {COPY_RIGHT}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
