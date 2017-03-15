/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */

import { Store, IOptions } from 'plume2'

import commActor from './actor/comm-actor'
import { getTopicsDetail } from './webapi'


export default class AppStore extends Store {
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
        //延时延时下loading效果
        setTimeout(() => {
          this.dispatch('detail:setTopicsDetail', d.data);
        }, 1000);

      }
    });

  }
}