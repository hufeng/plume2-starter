import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'
import { AppBar, Link,Navigation,CardMedia } from 'react-toolbox'

export default class Header extends React.Component<any, any>
{
  render() {
    return (
      <div>
      <CardMedia
          aspectRatio="wide"
          image={require('./img/nature.jpeg')}
        />
        </div>
    );
  }
}