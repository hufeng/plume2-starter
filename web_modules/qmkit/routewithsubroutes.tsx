import * as React from 'react'
import { Route } from 'react-router-dom'
import { AsyncRouter } from 'qmkit'


const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    // pass the sub-routes down to keep nesting
    route.component ?
      <route.component  {...props} routes={route.routes} />
      :
      <AsyncRouter {...props} load={route.asyncComponent} />
  )} />
)

export default RouteWithSubRoutes;