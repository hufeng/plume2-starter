/**
 * App 路由定义文件
 * 增加hash # 
 */

//使用preact-router 导入文件
// import { Router } from 'preact-router';
// import { AsyncRoute } from 'preact-async-route';
// import createHashHistory from 'history/createHashHistory'

//使用react-router 的导入

//import { Promise } from 'es6-promise';

import App from './app'
import Login from './login'
import HomeMain from './home-main'

interface ISystemExt extends Object {
  import?: (path: string) => any;
}

if (typeof System === 'undefined') {
  var System: ISystemExt = {};
  if (typeof System.import !== 'function') {
    System.import = (d) => {
      let module = require(d);
      return Promise.resolve(module);
    }
  }
}


//react-router使用异步加载
const AppRouter = {
  path: '/',
  component: App,
  indexRoute: { component: Login },
  childRoutes: [
    {
      path: 'home',
      indexRoute: { component: HomeMain },
      getComponent(nextState, cb) {
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
          getComponent(nextState, cb) {
            System.import('./profile').then(module => {
              cb(null, module.default);
            });
          }
        }
      ]
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
  <div>
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
  </div>
)
export default AppRouter;
 */


/*
//preact-router 不支持子路由 
const history = createHashHistory({
  hashType: 'hashbang' // the default
})
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  if (__DEV__) {
    console.log("history log=>", action, location.pathname, location.state)
  }
})

//第一种写法
const AppRouter = () => (
  <div>
  <Router history={history}>
    <Login path="/" />
    <Home path="/home" />
    <Login default />
  </Router>
  </div>
)

export default AppRouter;
*/

//第二种写法
/*
export default class AppRouter extends React.Component<any, any>
{
  render() {
    return (
      <Router>
        <Login path="/" />
      </Router>
    );
  }
}
*/