/**
 * Created by angrycans@gmail.com on 2017/3/15
 */

//FIXEDME
//tab = 2 spaces
import * as React from 'react';

/**
 * App 顶级路由框架
 * 复杂路由需要这个顶级页面作为root容器
 */

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}



