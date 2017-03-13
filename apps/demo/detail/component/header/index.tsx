import * as React from 'react'
import { Relax } from 'plume2'
import { AppBar } from 'react-toolbox'
import { browserHistory } from 'react-router'

@Relax
export default class Header extends React.Component<any, any>
{
  static relaxProps = {
    title: ['detail', 'title']
  }

  onLeftIconClick = () => {
    browserHistory.goBack();
  }

  render() {
    console.log("this.props.relaxProps", this.props.relaxProps);
    let { title } = this.props.relaxProps;
    return (
      <div>
        <AppBar
          title={title}
          leftIcon="arrow_back"
          onLeftIconClick={this.onLeftIconClick}
        />
      </div>
    );
  }
}