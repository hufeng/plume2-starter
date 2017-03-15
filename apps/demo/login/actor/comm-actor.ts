/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */

import { Action, Actor, IMap } from 'plume2'

/**
 * Actor组件
 * plume2 的核心组件
 * 在actor里面定义 页面组件需要改变的state数据
 * 页面state发生变化时由store dispatch @Action 到Actor中
 * Actor 如果比较到state发生变化会触发组件的@Relax方法,然后render变化的组件
 */

export default class CounterActor extends Actor {
  /**
   * 定义页面中的state
   * state的定义就是页面组件的数据模型 一定要设计合理
   */
  defaultState() {
    return {
      loading: false  //loading 状态
    }
  }

  /**
   * Action消息响应函数
   * 响应store dispatch 的 'login:setLoading' 然后设置state的loading的值
   * 这里的state是immutable 的数据类型
   * @param state
   * @return state
   */
  @Action('login:setLoading')
  setloading(state: IMap) {

    console.log("actor setLoading");

    return state.set('loading', true);
  }


}