import { NoAuthorizedPage } from 'pages';
import React from 'react'
import { StoreState, useAppSelector } from 'store'

type PrivateRouteProps = {
    renderIfTrue: (state: StoreState) => boolean; 
    children: React.ReactElement;
    fallbackComponent: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({renderIfTrue, children, fallbackComponent = <NoAuthorizedPage />}: PrivateRouteProps) => {
    
    const store = useAppSelector(store => store);

    if(renderIfTrue && renderIfTrue(store) || !renderIfTrue) {
        return children
    }

    return fallbackComponent;
}

export default PrivateRoute