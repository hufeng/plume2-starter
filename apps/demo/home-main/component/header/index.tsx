import * as React from 'react'

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