```
1.统一通用编码配置
  1.AirBnb es6 [编码规范]:(http://www.kancloud.cn/kancloud/javascript-style-guide/43119)
  1.tab用2个空格表示
  2.文件名使用小写，文件名的段落分割使用`-` 
  3.class的名称是驼峰风格

2.注释
使用jsdoc风格注释
[JSDOC](http://www.css88.com/doc/jsdoc/index.html)
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */

3.plume2约定
  1.view目录结构
  ├── views                   # 拆分的模块名称 
  │   ├── actor               # actor 文件夹
  │   ├── components          # 模块组件
  │   │   ├──header           # 子模块组件
  │   │   │   └──index.tsx    # 子模块入口
  │   │   ├──main             #
  │   │   └──bottom           #
  │   ├── index.tsx           # 入口 最好设计成container 模式 顶层container的render能够结构化表现
  │   ├── store.ts            # store中主要放入页面模块的需要relax注入的方法。
  │   └── webapi.ts           # fetch 的网络api 都放入webapi中。很直观的看到本模块需要调用的api接口











  ```