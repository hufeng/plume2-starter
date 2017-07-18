/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 *
 * App 路由定义文件
 * 增加使用 react-router v4
 */
import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { RouteWithSubRoutes, IRoute } from 'qmkit';
import Login from './login';
import Home from './home';
import HomeMain from './home-main';
//import Profile from './profile'

const routes: Array<IRoute> = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/main',
        exact: true,
        component: HomeMain
      },
      {
        path: '/home/profile',
        exact: true,
        asyncComponent: () => System.import('./profile')
      }
    ]
  }
];

const AppRouter = () =>
  <Router>
    <div>
      {RouteWithSubRoutes(routes)}
    </div>
  </Router>;

export default AppRouter;
