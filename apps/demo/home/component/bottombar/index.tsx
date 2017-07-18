/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */

import * as React from 'react';
import * as classNames from 'classnames';
import { FontIcon } from 'react-toolbox';
import { Link } from 'react-router-dom';

const styles: any = require('./bottombar.css');

/**
 * home组件的bottombar 组件设计
 * 在bottombar中有个底部导航
 * 这儿没有使用plume2的state 而是使用了react state
 * 什么时候该使用plume2的state或者react state？
 * 组件页面状态变化不涉及业务数据的变化一般直接采用react state来控制页面的render
 */

export default class BottomBar extends React.Component<any, any> {
  state: {
    index: number;
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    let { index } = this.state;

    return (
      <div>
        <div className={styles.ul}>
          <li
            className={classNames(styles.li, { [styles.liActive]: 0 == index })}
            onClick={() => this.handleActive(0)}
          >
            <FontIcon className={styles.icon} value="person" />
            <span className={styles.span}>
              <Link to="/home/main">main</Link>
            </span>
          </li>
          <li
            className={classNames(styles.li, { [styles.liActive]: 1 == index })}
            onClick={() => this.handleActive(1)}
          >
            <FontIcon className={styles.icon} value="person" />
            <span className={styles.span}>
              <Link to="/home/profile">profile</Link>
            </span>
          </li>
          <li
            className={classNames(styles.li, { [styles.liActive]: 2 == index })}
            onClick={() => this.handleActive(2)}
          >
            <FontIcon className={styles.icon} value="person" />
            <span className={styles.span}>test</span>
          </li>
          <li
            className={classNames(styles.li, { [styles.liActive]: 3 == index })}
            onClick={() => this.handleActive(3)}
          >
            <FontIcon className={styles.icon} value="person" />
            <span className={styles.span}>test</span>
          </li>
        </div>
      </div>
    );
  }

  handleActive = (index: number) => {
    this.setState({ index });
  };
}
