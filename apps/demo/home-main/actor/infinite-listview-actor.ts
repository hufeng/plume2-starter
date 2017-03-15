/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import { Action, Actor, IMap } from 'plume2'
import { fromJS } from 'immutable'

/**
 * homeMain无限上拉刷新的actor
 *
 */
export default class InfiniteActor extends Actor {

  defaultState() {
    return {
      hasmore: false,   //还有更多数据 显示 loading
      infiniteList: [], //无限下拉数据
    }
  }

  /**
   * 响应home-main:setHasmore 动作
   * @param state 
   */
  @Action('home-main:setHasmore')
  setHasmore(state: IMap) {
    console.log("actor setHasmore")
    return state.set('hasmore', true)
  }

  /**
   * 响应home-main:getMoreData 动作后，设置state的变化
   * @param state 
   * @param data 
   */
  @Action('home-main:getMoreData')
  getMoreData(state: IMap, data: Array<any>) {

    let _data = state.get('infiniteList').toJS();
    data.map(item => {
      _data.push(item);
    })

    return state
      .set('infiniteList', fromJS(_data))
      .set('hasmore', false);
  }

  /**
   *无限上拉刷新数据初始化
   */
  @Action('home-main:initInfiniteList')
  initInfiniteList(state: IMap, data: Array<any>) {
    /**
     * 在plume2 中对于state里面的数组类型数据 需要手动进行immutable格式转换
     * 在state中放入immutable的数据格式 可以然plume2比较容易的diff出变化的数据
     */
    return state.set('infiniteList', fromJS(data));
  }
}