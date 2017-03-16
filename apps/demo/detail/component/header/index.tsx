/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react'
import { Relax } from 'plume2'
import { AppBar } from 'react-toolbox'
import { browserHistory } from 'react-router'

/**
 * detail页面的header组件
 */
@Relax
export default class Header extends React.Component<any, any> {
  props: {
    relaxProps?: {
      title: string;
    }
  };

  /**
   * 绑定详情页面的标题到header的title数据
   * 这儿支持路径的方式绑定
   */
  static relaxProps = {
    title: ['detail', 'title']
  }

  render() {
    const { title } = this.props.relaxProps

    if (__DEV__) {
      console.log("this.props.relaxProps", title)
    }

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


  onLeftIconClick = () => {
    browserHistory.goBack();
  }
}