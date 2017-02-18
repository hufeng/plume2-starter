import {Store, IOptions} from 'plume2'
import HelloActor from './actor/hello-actor'
import CounterActor from './actor/counter-actor'

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
}