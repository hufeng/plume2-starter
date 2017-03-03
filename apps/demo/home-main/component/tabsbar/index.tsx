import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'
import { AppBar, Link,Navigation,CardMedia,Tabs,Tab } from 'react-toolbox'

export default class TabsBar extends React.Component<any, any>
{
  state = {
    index: 1
  };

  handleTabChange=(index)=>{
    this.setState({index});
  }

  handleActive=()=>{
    
  }

  render() {
    return (
        <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
          <Tab label='精选'>1</Tab>
          <Tab label='动态' onActive={this.handleActive}>2</Tab>
          <Tab label='原创'>3</Tab>
        </Tabs>
    );
  }
}