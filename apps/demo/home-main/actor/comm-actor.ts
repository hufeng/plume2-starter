/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import { Action, Actor, IMap } from 'plume2';

/**
 * homeMain 的常用actor方法
 */
export default class CounterActor extends Actor {
  defaultState() {
    return {
      list: []
    };
  }

  /**
   * setListData 方法
   * 把list数据放入state的list中
   * @param state 
   * @param data 
   */
  @Action('home-main:setListData')
  setListData(state: IMap, data: [any]) {
    return state.set('list', data);
  }
}
