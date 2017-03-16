/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import { Action, Actor, IMap } from 'plume2'
import { fromJS } from "immutable";

/**
 * 详情页面actor
 */
export default class CommActor extends Actor {
  defaultState() {
    return {
      loading: false, //loading 是否显示
      detail: {},     //详情数据
    }
  }

  @Action('detail:setLoading')
  setloading(state: IMap) {
    console.log("actor setLoading")
    return state.set('loading', true);
  }

  @Action('detail:setTopicsDetail')
  setTopicsDetail(state: IMap, data: any) {
    return state.withMutations(state => {
      state
        .set('detail', fromJS(data))
        .set('loading', false);
    })
  }
}