import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { useAppSelector } from "store";

export interface HelmetHandlerProps {
  children?: React.ReactNode;
}

const HelmetHandler = ({ children }: HelmetHandlerProps) => {
  const { title, meta, link } = useAppSelector((state) => state.app.helmet);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {title && <title>{title}</title>}
          {meta && meta.map((ele) => <meta key={ele.name} {...ele} />)}
          {link && link.map((ele) => <link key={ele.href} {...ele} />)}
        </Helmet>
      </HelmetProvider>
      {children}
    </>
  );
};

export default HelmetHandler;
