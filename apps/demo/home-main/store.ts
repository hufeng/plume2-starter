/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import { Store, IOptions } from 'plume2';

import commActor from './actor/comm-actor';
import getTopics from './webapi';
import InfiniteActor from './actor/infinite-listview-actor';

/**
 * homeMain 的store
 */

export default class AppStore extends Store {
  constructor(props: IOptions) {
    super(props);
    if (__DEV__) {
      window['_store'] = this;
    }
  }

  bindActor() {
    return [new commActor(), new InfiniteActor()];
  }

  /**
   * 进入homeMain后初始化需要的topic数据
   */
  init = () => {
    getTopics().then(data => {
      console.log('home-main getTopics', data);
      if (data.success) {
        this.dispatch('home-main:setListData', data.data);
      }
    });
  };

  setHasmore = () => {
    console.log('store setHasmore');
    //延时演示下hasmore loading
    setTimeout(() => {
      this.dispatch('home-main:setHasmore');
    }, 1000);
  };

  initInfiniteList = () => {
    getTopics().then(data => {
      if (data.success) {
        this.dispatch('home-main:initInfiniteList', data.data);
      }
    });
  };

  getMoreData = () => {
    getTopics().then(data => {
      console.log('home-main getMoreData', data);
      if (data.success) {
        this.dispatch('home-main:getMoreData', data.data);
      }
    });
  };
}
