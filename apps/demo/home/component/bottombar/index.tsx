import * as React from 'react'
import * as  classNames from 'classnames';
import { FontIcon } from 'react-toolbox'
import { Link } from 'react-router';

const styles: any = require("./bottombar.css");

export default class BottomBar extends React.Component<any, any>
{
  state = {
    index: 0
  };


  handleActive = (index: number) => {
    console.log("index=", index);
    this.setState({ index });

  }
  render() {
    let { index } = this.state;
    return (
      <div>
        <div className={styles.ul}>
          <li className={classNames(styles.li, { [styles.liActive]: 0 == index ? true : false })} onClick={this.handleActive.bind(null, 0)}>
            <FontIcon className={styles.icon} value='person' />
            <span className={styles.span}><Link to="/home/main">main</Link></span>
          </li>
          <li className={classNames(styles.li, { [styles.liActive]: 1 == index ? true : false })} onClick={this.handleActive.bind(null, 1)}>
            <FontIcon className={styles.icon} value='person' />
            <span className={styles.span}><Link to="/home/profile">profile</Link></span>
          </li>
          <li className={classNames(styles.li, { [styles.liActive]: 2 == index ? true : false })} onClick={this.handleActive.bind(null, 2)}>
            <FontIcon className={styles.icon} value='person' />
            <span className={styles.span}>test</span>
          </li>
          <li className={classNames(styles.li, { [styles.liActive]: 3 == index ? true : false })} onClick={this.handleActive.bind(null, 3)}>
            <FontIcon className={styles.icon} value='person' />
            <span className={styles.span}>test</span>
          </li>
        </div>


      </div>

    );
  }
}