import React from 'react'
import { Route } from 'react-router-dom'
import AsyncRoute, { Loader } from './async-router'

type TFnComponent = (...params: Array<any>) => any;

export interface IRoute {
  path: string;
  strict?: boolean;
  exact?: boolean;
  component?: React.ComponentClass<any> | TFnComponent;
  asyncComponent?: Loader;
  routes?: Array<IRoute>;
}

export default function routeWithSubRoutes(routes: Array<IRoute>) {
  //console.log("routes=>", routes);
  return routes.map((route, index) => {
    //dev check
    if (process.env.NODE_ENV != 'production') {
      if (route.component == undefined && route.asyncComponent == undefined) {
        throw new Error(`${route.path} can not find component or asyncComponent`)
      }
    }

    if (route.component) {
      return (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          strict={route.strict}
          render={(props) => <route.component {...props} subRoutes={route.routes} />}
        />
      )
    } else {
      return (
        <AsyncRoute
          key={index}
          exact={route.exact}
          strict={route.strict}
          path={route.path}
          subRoutes={route.routes}
          load={route.asyncComponent}
        />
      )
    }
  })
}