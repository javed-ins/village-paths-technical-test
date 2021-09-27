import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('features/Dashboard')),
    exact: true,
  },
  {
    path: 'users',
    component: lazy(() => import('features/Users')),
    exact: true,
  },
  {
    path: 'joinOrg',
    component: lazy(() => import('components/joinOrg')),
    exact: true,
  },
  {
    path: 'newAccount',
    component: lazy(() => import('components/newAccount')),
    exact: true,
  },
];

export default routes;
