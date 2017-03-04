import { Store, IOptions } from 'plume2'

import commActor from './actor/comm-actor'
import getTopics from './webapi'


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
    console.log("store setLoading")
    this.dispatch('login:setLoading')
  };

  init = () => {
    getTopics().then(data => {
      console.log("home-main getTopics", data);
      if (data.success) {
        this.dispatch('home-main:setListData', data.data)
      }
     

    });


  }
}