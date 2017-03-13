/**
 * App 路由定义文件
 * 增加使用 react-router
 */

// import * as React from 'react'
// import {
//   Router,
//   Route,
//   IndexRoute,
//   Link,
//   hashHistory
// } from 'react-router'


import App from './app'
import Login from './login'
import HomeMain from './home-main'
//import Detail from './detail'


declare const System: any;
//react-router使用异步加载
const AppRouter = {
  path: '/',
  component: App,
  indexRoute: { component: Login },
  childRoutes: [
    {
      path: 'home',
      indexRoute: { component: HomeMain },
      getComponent({ }, cb) {
        System.import('./home').then(module => {
          cb(null, module.default);

        });
      },
      childRoutes: [
        {
          path: 'main',
          component: HomeMain
        },
        {
          path: 'profile',
          getComponent({ }, cb) {
            System.import('./profile').then(module => {
              cb(null, module.default);
            });
          }
        }
      ]
    },
    {
      path: 'detail/:id',
      getComponent({ }, cb) {
        System.import('./detail').then(module => {
          cb(null, module.default);
        });
      }
    }
    , {
      path: 'login',
      component: Login,
    }
  ]

};


export default AppRouter

/**
//使用react-router 静态配置
const AppRouter = () => (
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home}>
           <IndexRoute component={HomeMain} />
          <Route path="main" component={HomeMain} />
          <Route path="profile" component={Profile} />
        </Route>
      </Route>
    </Router>
)
export default AppRouter;
 */

