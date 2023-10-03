import { pagePath } from "constants";
import { Outlet, RouteObject } from "react-router";
import React from 'react';
import { MainLayout } from "components/layouts";
import { NotFoundPage } from "pages";


const Home = React.lazy(() => import('pages/HomePage'))
const Login = React.lazy(() => import('pages/LoginPage'));


const extendedRoutes: RouteObject[] = [
    {
        index: true,
        path: pagePath.home,
        element: <Home />
    }
];

const routes: RouteObject[] = [
    {
        path: pagePath.default,
        element: (
            <MainLayout>
                <Outlet />
            </MainLayout>
        ),
        children: [
            ...extendedRoutes,
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    },
    {
        path: pagePath.login,
        element: <Login />
    }
]

export default routes;
