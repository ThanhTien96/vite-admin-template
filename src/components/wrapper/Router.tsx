import { MainLayout } from "components/layouts";
import routes from "configs/router";
import { LoadingPage } from "pages";
import React from "react";
import {
  BrowserRouter,
  useRoutes,
  RouteObject,
  Navigate,
} from "react-router-dom";

export interface RouterProps {
    defaultRoute: string;
}

export const Routes = (props: RouterProps) => {
    const {defaultRoute} = props;
    const defaultRouteObject: RouteObject = {
        index: true,
        path: "/",
        element: <Navigate to={defaultRoute} />
    }

    const elements = useRoutes([defaultRouteObject, ...routes]);

    return (
        <React.Suspense 
            fallback={
                <MainLayout>
                    <LoadingPage />
                </MainLayout>
            }
        >
            {elements}
        </React.Suspense>
    )
};


const Router = (props: RouterProps) => {
    return(
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    )
}


export default Router;