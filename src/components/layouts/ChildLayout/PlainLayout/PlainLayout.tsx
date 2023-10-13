import clsx from "clsx";
import React from "react";
import "./PlainLayout.style.less";
import { WithChildLayout } from "..";
import { ChildLayoutProps } from "../ChildLayout";


export interface PlainLayoutProps
  extends React.FC<
    ChildLayoutProps & React.HTMLAttributes<HTMLDivElement>
  > {}

const Layout: PlainLayoutProps = (props) => {
  return (
    <div
      {...props}
      className={clsx("plain-layout-content h-full", props.className)}
    />
  );
};

export default WithChildLayout(Layout);
