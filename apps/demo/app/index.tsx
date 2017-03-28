/**
 * Created by angrycans@gmail.com on 2017/3/15
 */

//FIXEDME
//tab = 2 spaces
import * as React from 'react';
import { renderRoutes } from 'react-router-config'
/**
 * App 顶级路由框架
 * 复杂路由需要这个顶级页面作为root容器
 */

const App = ({ route }) => (
    <div>
        {renderRoutes(route.routes)}
    </div>
)

export default App



