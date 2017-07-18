/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './router';

if (__DEV__) {
  require('preact/devtools');
}

/**
 * 使用异步子路由的加载方式
 */
ReactDOM.render(<AppRouter />, document.getElementById('app'));

/**
 * 使用静态路由的加载方式
 */
//ReactDOM.render(<AppRouter/>, document.getElementById('app'))
