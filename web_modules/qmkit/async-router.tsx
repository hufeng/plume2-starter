import * as React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import { IRoute } from './route-with-subroutes'
import noop from './noop'

export type Loader = () => Promise<any>;

export interface Props {
  path: string;
  exact?: boolean;
  strict?: boolean;
  load: Loader;
  subRoutes?: Array<IRoute>;
}

/**
 * 封装异步路由的解决方案 
 * @param props 路由参数
 */
export default function AsyncRoute(props: Props) {
  const { load, ...rest } = props
  return (
    <Route
      {...rest}
      render={props => <AsyncLoader {...props} load={load} />}
    />
  )
}


/**
 * 异步load模块组件
 */
class AsyncLoader extends Component<any, any> {
  props: {
    load: Loader
  };

  state: {
    Component: React.ComponentClass<any>
  }

  static defaultProps = {
    load: noop
  };

  constructor(props) {
    super(props)
    this.state = {
      Component: null
    }
  }

  componentDidMount() {
    const { load } = this.props

    load()
      .then(Component => this.setState({
        Component: Component.default || Component
      }))
      .catch(err => {
        if (process.env.NODE_ENV != 'production') {
          console.trace(err)
        }
      })
  }

  render() {
    const { Component } = this.state

    return (
      Component
        ? <Component {...this.props} />
        : <div>loading...</div>
    )
  }
}
