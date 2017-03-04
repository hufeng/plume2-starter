import { Action, Actor, IMap } from 'plume2'

export default class CounterActor extends Actor {
  defaultState() {
    return {
      loading: false,
      list: [],
    }
  }

  @Action('home-main:setLoading')
  setloading(state: IMap) {
    console.log("actor setLoading")
    return state.set('loading', true);
  }

  @Action('home-main:setListData')
  setListData(state: IMap, data: Array<any>) {
    console.log("actor setListData", data);

    return state.set('list', data);
  }

}