import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { match, Router, hashHistory } from 'react-router'
import AppRouter from './router'

if (__DEV__) {
    require('preact/devtools')
}


match({ history: hashHistory, routes: AppRouter }, (err, redirectLocation, renderProps: any) => {

    if (err) {
        console.log("err:" + err);
        console.log("redirectLocation:" + redirectLocation);
        console.log("renderProps:" + JSON.stringify(renderProps));
    }
    let router = (
        <Router {...renderProps} children={AppRouter} />
    )

    ReactDOM.render(<Router {...renderProps} children={AppRouter} />, document.getElementById('app'));


//ReactDOM.render(<AppRouter/>, document.getElementById('app'))