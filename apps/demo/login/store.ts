/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */


import { Store, IOptions } from 'plume2'
import { hashHistory } from 'react-router'

import commActor from './actor/comm-actor'
import webapi from './webapi'

/**
 * store 组件
 * 组件内的需要方法都在store里面定义
 * 包括对外的webapi 和dispatch到actor的方法
 */

export default class AppStore extends Store {
  constructor(props: IOptions) {
    super(props)
    if (__DEV__) {
      window['_store'] = this
    }
  }

  /**
   * 在store中绑定actor
   * @returns [actor]
   */
  bindActor() {
    return [
      new commActor,

    ]
  }

  /**
   * 演示login时 loading的变化
   */
  setLoading = () => {
    this.dispatch('login:setLoading')
    setTimeout(function () {

      //可以进行用户身份验证
      //... ...

      //路由的手动调整
      hashHistory.push("/home")

    }, 2000);

  };

  init = () => {
    console.log("app login view init");
    //login view 初始化

    webapi.init();
  }
}