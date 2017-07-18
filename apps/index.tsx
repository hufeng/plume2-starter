import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './hello';

//开启preact的react-devtools
if (__DEV__) {
  require('preact/devtools');
}

ReactDOM.render(<Hello />, document.getElementById('app'));
