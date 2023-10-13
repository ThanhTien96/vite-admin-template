import { pagePaths } from "constants";
import { Outlet, RouteObject } from "react-router";
import React from 'react';
import { MainLayout } from "components/layouts";
import { NotFoundPage } from "pages";


const Home = React.lazy(() => import('pages/HomePage'));
const Login = React.lazy(() => import('pages/LoginPage'));
const Setting = React.lazy(() => import('pages/SettingPage'));
const Appearence = React.lazy(() => import("pages/SettingPage/subsContent/AppearanceSetting"));
const Account = React.lazy(() => import("pages/SettingPage/subsContent/AccountSetting"));
const Profile = React.lazy(() => import("pages/ProfilePage"));

const extendedRoutes: RouteObject[] = [
    {
        index: true,
        path: pagePaths.home,
        element: <Home />
    },
    {
        path: pagePaths.setting,
        element: (<Setting>
            <Outlet />
        </Setting>),
        children: [
            {
                index: true,
                path: pagePaths.account,
                element: <Account />
            },
            {
                path: pagePaths.appearance,
                element:<Appearence />
            }
        ]
    },
    {
        path: pagePaths.profile,
        element: <Profile />
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
