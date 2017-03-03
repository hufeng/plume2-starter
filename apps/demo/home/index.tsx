import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'


import AppStore from './store'
import Header from './component/header'
import BottomBar from './component/bottombar'

export default class Home extends React.Component<any, any>
{
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <BottomBar />
      </div>
    );
  }
}