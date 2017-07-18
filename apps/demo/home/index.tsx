/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { RouteWithSubRoutes } from 'qmkit';

import Header from './component/header';
import BottomBar from './component/bottombar';

/**
 * home 主页组件框架容器
 * 在组件划分的时候 需要思考最近组件设计 在容器内尽量拆分出独立组件
 */
const Home = ({ subRoutes }) => {
  console.log('route=>', subRoutes);
  return (
    <div>
      <Header />
      {RouteWithSubRoutes(subRoutes)}
      <BottomBar />
    </div>
  );
};

export default Home;
