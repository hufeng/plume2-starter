import { Action, Actor, IMap } from 'plume2'
import { fromJS } from "immutable";

export default class CounterActor extends Actor {
  defaultState() {
    return {
      loading: false,
      detail: {},
    }
  }

  @Action('detail:setLoading')
  setloading(state: IMap) {
    console.log("actor setLoading")
    return state.set('loading', true);
  }

  @Action('detail:setTopicsDetail')
  setTopicsDetail(state: IMap, data: any) {
    //console.log("actor setLoading")
    return state
      .set('detail', fromJS(data))
      .set('loading', false);
  }

}