/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */


import * as React from 'react'
import { Card, CardTitle, CardMedia, CardActions, Button, Input, ProgressBar } from 'react-toolbox'
import { StoreProvider } from 'plume2'

import AppStore from './store'

/**
 * 页面的顶层组件设计
 */

/**
 * 在顶层组件中@StoreProvider是桥接store和view的关系
 */
@StoreProvider(AppStore, { debug: __DEV__ })
export default class Login extends React.Component<any, any> {
  /**
   * 顶层组件中引用store的声明
   */
  store: AppStore;

  /**
   * 顶层组件中使用store 上面的方法
   */
  componentWillMount() {
    this.store.init();
  }

  render() {

    let loading = this.store.state().get("loading");
    let setloading = this.store.setLoading;

    return (
      <Card style={{ width: '100%', height: '100%' }}>
        {
          loading ?
            <section >
              <ProgressBar mode='indeterminate' />
            </section>
            : null
        }

        <CardTitle
          avatar={require('./img/nature.jpeg')}
          title="User Login"
          subtitle=""
        />
        <CardMedia
          aspectRatio="wide"
          image={require('./img/nature.jpeg')}
        />
        <section>
          <Input type='tel' required label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} maxLength={16} />
          <Input type='password' required label='password' name='name' icon='visibility' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
        </section>
        <CardActions >
          <Button label="登录" icon='add' raised primary onClick={setloading} />
          <Button href='/#/home/main' raised>
            跳过登录
          </Button>
        </CardActions>
      </Card>
    );
  }

  /**
 * handle input 框的change事件
 * @param {string} inputname input的名称
 * @param {string} val input change后的value值
 * @returns null
 */
  handleChange = (inputname: string, val: string) => {
    console.log("handleChange", inputname, val)
  }
}