import { Store, IOptions } from 'plume2'

import commActor from './actor/comm-actor'
import { getTopicsDetail } from './webapi'


export default class AppStore extends Store {
  //[propName: string]: any;
  constructor(props: IOptions) {
    super(props)
    if (__DEV__) {
      window['_store'] = this
    }
  }
  bindActor() {
    return [
      new commActor,

    ]
  }

  setLoading = () => {
    console.log("detail:setLoading")
    this.dispatch('detail:setLoading')
  };

  setTopicsDetail = (id: string) => {
    this.setLoading();
    getTopicsDetail(id).then(d => {
      console.log("setTopicsDetail=>", d);
      if (d.success) {
        this.dispatch('detail:setTopicsDetail', d.data);
      }
    });

  }
}