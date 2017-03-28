import noop from './noop'
import AsyncRouter from './async-router'
import RouteWithSubRoutes2 from './routewithsubroutes'
import RouteWithSubRoutes, { IRoute } from './route-with-subroutes'
import Fetch from './fetch'

export type Handler = () => void;
export interface Response {
  success: boolean;
  data?: Array<any>;
}

export {
  noop,
  AsyncRouter,
  RouteWithSubRoutes,
  RouteWithSubRoutes2,
  Fetch,
  IRoute
}