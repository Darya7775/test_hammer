import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'main.clients.clients-list',
        path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
        component: React.lazy(() => import('views/app-views/main/clients/clients-list')),
    },
    {
        key: 'main.clients.edit-profile',
        path: `${APP_PREFIX_PATH}/main/clients/edit-profile/*`,
        component: React.lazy(() => import('views/app-views/main/clients/edit-profile')),
    },
    {
        key: 'main.scheduler',
        path: `${APP_PREFIX_PATH}/main/scheduler`,
        component: React.lazy(() => import('views/app-views/main/scheduler')),
    },
]