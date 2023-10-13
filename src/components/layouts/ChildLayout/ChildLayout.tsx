import { PageHeaderProps } from "@ant-design/pro-layout";
import clsx from "clsx";
import { PageHeader } from "components/shared";
import React from "react";
import { Layout } from "antd";

const {Footer} = Layout;
export interface ChildLayoutProps extends React.HTMLAttributes<HTMLElement> {
  headerprops?: PageHeaderProps;
  footerprops?: React.HTMLAttributes<HTMLElement>;
}

const ChildLayout: React.FC<ChildLayoutProps> = (props) => {
  const { headerprops, footerprops, children } = props;
  return (
    <>
      {headerprops && (
        <PageHeader
          {...headerprops}
          className={clsx(headerprops.className, "px-0")}
        />
      )}
      <div className='overflow-x-hidden overflow-y-auto h-full'>{children}</div>
      {footerprops && <Footer {...footerprops} />}
    </>
  );
};

export default ChildLayout;
