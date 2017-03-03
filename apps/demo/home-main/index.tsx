import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'


import AppStore from './store'
import Header from './component/header'
import TabsBar from './component/tabsbar'

const noop = () => { }

type Handler = () => void;

@StoreProvider(AppStore, { debug: __DEV__ })
//@Relax
export default class HomeMain extends React.Component<any, any>
{

  store: AppStore;


  constructor() {
    super();
  }

  componentDidMount() {

  }

  handleChange = () => {
    console.log("handleClick")
  }
  handleClick = () => {
    console.log("handleClick")
  }

  render() {
    return (
      <div>
        <Header />
        <TabsBar />
      </div>
    );
  }
}