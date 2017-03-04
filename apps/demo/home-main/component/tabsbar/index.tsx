import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'
import { AppBar, Link, Navigation, CardMedia, Tabs, Tab } from 'react-toolbox'

import ListView from '../listview'

export default class TabsBar extends React.Component<any, any>
{
  state = {
    index: 1
  };

  handleTabChange = (index) => {
    this.setState({ index });
  }

  handleActive = () => {
    if (__DEV__) {
      console.log("TabsBar handleActive");
    }
  }

  render() {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
        <Tab label='精选' onActive={this.handleActive}>1</Tab>
        <Tab label='动态' onActive={this.handleActive}><ListView /></Tab>
        <Tab label='原创' onActive={this.handleActive}>3</Tab>
      </Tabs>
    );
  }
}