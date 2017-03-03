import {Store, IOptions} from 'plume2'

import commActor from './actor/comm-actor'
import WebApi from './webapi'


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

  init=()=>{
   let data= new WebApi().init();
   //console.log("init",data);
  }
}