import * as React from 'react'
import * as ReactDOM from 'react'
import { StoreProvider } from 'plume2'
import AppStore from './store'
import Text from './component/text'

@StoreProvider(AppStore, { debug: __DEV__ })
export default class HelloApp extends React.Component<any, any> {
  render() {
    return (
      <Text />
    )
  }
}