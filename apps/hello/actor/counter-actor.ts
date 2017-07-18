import { Action, Actor, IMap } from 'plume2';

export default class CounterActor extends Actor {
  defaultState() {
    return { count: 1 };
  }

  @Action('increment')
  increment(state: IMap) {
    return state.update('count', count => count + 1);
  }

  @Action('decrement')
  decrement(state: IMap) {
    return state.update('count', count => count - 1);
  }
}
