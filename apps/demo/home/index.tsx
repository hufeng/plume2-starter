import * as React from 'react'
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