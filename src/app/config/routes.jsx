import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/home/home';
import Example1 from '../views/example-1/example-1';
import Example2 from '../views/example-2/example-2';
import Example3 from '../views/example-3/example-3';
import Example4 from '../views/example-4/example-4';

export const AppRoutesConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
    linkName: 'Home',
  },
  {
    path: '/example-1',
    exact: true,
    component: Example1,
    linkName: 'Example 1',
  },
  {
    path: '/example-2',
    exact: true,
    component: Example2,
    linkName: 'Example 2',
  },
  {
    path: '/example-3',
    exact: true,
    component: Example3,
    linkName: 'Example 3',
  },
  {
    path: '/example-4',
    exact: true,
    component: Example4,
    linkName: 'Example 4',
  },
];

export default (
  <Switch>
    {AppRoutesConfig.map(route => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);
