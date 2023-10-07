import { pagePaths } from "constants";
import { Outlet, RouteObject } from "react-router";
import React from 'react';
import { MainLayout } from "components/layouts";
import { NotFoundPage } from "pages";


const Home = React.lazy(() => import('pages/HomePage'));
const Login = React.lazy(() => import('pages/LoginPage'));
const Setting = React.lazy(() => import('pages/SettingPage'));


const extendedRoutes: RouteObject[] = [
    {
        index: true,
        path: pagePaths.home,
        element: <Home />
    },
    {
        path: pagePaths.setting,
        element: <Setting />
    }
];

const routes: RouteObject[] = [
    {
        path: pagePaths.default,
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
        path: pagePaths.login,
        element: <Login />
    }
]

export default routes;
