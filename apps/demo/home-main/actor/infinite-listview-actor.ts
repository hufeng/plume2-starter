import { Action, Actor, IMap } from 'plume2'


import { noop, Handler } from '../../plume-utils'

export default class InfiniteActor extends Actor {
  defaultState() {
    return {
      hasmore: false,
      infiniteList: [],
      getMoreData: noop
    }
  }

  @Action('home-main:setHasmore')
  setHasmore(state: IMap) {
    console.log("actor setHasmore")
    return state.set('hasmore', true)
  }

  @Action('home-main:getMoreData')
  getMoreData(state: IMap, data: Array<any>) {
    let _data = state.get('infiniteList');
    data.map(item => {
      _data.push(item);
    })
    //console.log("getMoreData", _data);
    return state.set('infiniteList', _data)
      .set('hasmore', false);
  }

  @Action('home-main:initInfiniteList')
  initInfiniteList(state: IMap, data: Array<any>) {
    return state.set('infiniteList', data);
  }
}