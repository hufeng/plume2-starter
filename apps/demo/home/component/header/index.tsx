/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */


import * as React from 'react'
import { AppBar } from 'react-toolbox'

/**
 * home 页面的header组件
 */

export default class Header extends React.Component<any, any>
{
  render() {
    return (
      <div>
        <AppBar title="demo" leftIcon="menu" rightIcon="person">
          <input type="search" placeholder="Search..." />
        </AppBar>
      </div>
    );
  }
}