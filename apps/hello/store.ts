import { Store, IOptions } from 'plume2'
import HelloActor from './actor/hello-actor'
import CounterActor from './actor/counter-actor'
import WebApi from './Webapi'

export default class AppStore extends Store {
  constructor(props: IOptions) {
    super(props)

    if (__DEV__) {
      window['_store'] = this
    }
  }

  bindActor() {
    return [
      new HelloActor,
      new CounterActor
    ]
  }

  increment = () => this.dispatch('increment');


  /**
   * 测试使用async 和不使用async 对于打包后体积的影响
   * 演示使用promise的用法
   */
  init = () => {
    WebApi.init()
  }
}