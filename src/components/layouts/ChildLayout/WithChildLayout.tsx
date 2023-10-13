
import React from 'react'
import ChildLayout, { ChildLayoutProps } from './ChildLayout'


export type BaseLayoutProps<T extends unknown> = T & ChildLayoutProps;

function WithChildLayout<T>(Page: React.FC<T>): React.FC<T> {
    const RootPage: typeof Page = (props: T) => {
      return (
        <ChildLayout {...props}>
          <Page {...(props as any)} />
        </ChildLayout>
      );
    };
  
    return RootPage;
  }

  export default WithChildLayout