/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { StoreProvider } from 'plume2';

import AppStore from './store';
import Header from './component/header';
import TabsBar from './component/tabsbar';

/**
 * HomeMain组件设计
 * 这是一个plume2的顶层组件
 * 顶层组件的render尽量直观的描述出组件的结构
 */
@StoreProvider(AppStore, { debug: __DEV__ })
export default class HomeMain extends React.Component<any, any> {
  store: AppStore;

  //init
  componentWillMount() {
    this.store.init();
  }

  render() {
    return (
      <div>
        <Header />
        <TabsBar />
      </div>
    );
  }
}
