import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'
import { AppBar, Link,Navigation,CardMedia } from 'react-toolbox'

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