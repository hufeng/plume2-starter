/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react'
import { StoreProvider } from 'plume2'
import { ProgressBar } from 'react-toolbox';

import AppStore from './store'
import Header from './component/header'
import Detail from './component/detail'

@StoreProvider(AppStore, { debug: __DEV__ })
export default class Home extends React.Component<any, any> {
  store: AppStore;

  componentDidMount() {
    //init
    this.store.setTopicsDetail(this.props.params.id);
  }

  render() {
    const loading = this.store.state().get('loading')

    if (loading) {
      return (
        <ProgressBar
          type='circular'
          mode='indeterminate'
          multicolor
        />
      )
    }

    return (
      <div>
        <Header />
        <Detail />
      </div>
    );
  }
}