import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'
import { AppBar, Link, Navigation, CardMedia } from 'react-toolbox'
const styles: any = require("./style.css");

export default class Header extends React.Component<any, any>
{
  render() {
    return (
      <div>
        <img
          className={styles.context}

          src={require('./img/nature.jpeg')}
        />
      </div>
    );
  }
}