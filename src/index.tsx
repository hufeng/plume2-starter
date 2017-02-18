import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './hello'

if (__DEV__) {
  require('preact/devtools')
}

ReactDOM.render(<Hello/>, document.getElementById('app'))