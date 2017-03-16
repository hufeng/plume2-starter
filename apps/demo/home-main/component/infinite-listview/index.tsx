/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react'
import { Relax, IMap } from 'plume2'
import { List, ListItem, ProgressBar } from 'react-toolbox'

import RcListView from 'rc-list-view'

import { noop, Handler } from '../../../plume-utils'
const styles: any = require("./style.css");

interface ListType {
  author?: {
    avatar_url: string,
    loginname: string,
  },
  author_id?: string,
  content?: string,
  create_at: string,
  good?: boolean,
  id?: string,
  last_reply_at?: string,
  reply_count?: number,
  tab?: string,
  title?: string,
  top?: boolean,
  visit_count?: number,

}

interface IProps {
  relaxProps?: {
    infiniteList: IMap,
    hasmore: boolean,
    setHasmore: Handler,
    getMoreData: Handler,
    initInfiniteList: Handler
  }
}

/**
 * @Relax plume2 的核心组件
 * 把store和actor中的数据绑定到view
 */
@Relax
export default class InfiniteListView extends React.Component<IProps, any> {
  base: any;
  /**
   * plume2 中在组件中引用actor数据的定义
   * 引用store中的方法的定义
   * relaxProps 负责绑定actor的数据 store的方法到view
   */
  static relaxProps = {
    hasmore: 'hasmore',
    infiniteList: 'infiniteList',
    setHasmore: noop,
    getMoreData: noop,
    initInfiniteList: noop
  };

  getInitialState() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      scrollTop: 0,
    };
  }

  componentDidMount() {
    this.setState({
      clientHeight: this.base.clientHeight,
      scrollTop: this.base.scrollTop,
    });

    //初始化list数据
    this.props.relaxProps.initInfiniteList();
  }

  /**
   * handle滚动信息
   */
  _handleScroll = (e) => {
    let { clientHeight, scrollHeight, scrollTop } = e.target;
    let { hasmore, setHasmore, getMoreData } = this.props.relaxProps;
    //判断是否滚动到list底部
    if (scrollHeight - clientHeight === scrollTop) {
      console.log("hasmore", hasmore);
      if (!hasmore) {
        setHasmore();
      } else {
        getMoreData();
      }

    }
  }

  _renderRow(row) {
    let item = row as ListType;
    return (
      <ListItem
        avatar={item.author.avatar_url}
        caption={item.author.loginname}
        legend={item.title}
        rightIcon='star'
      />
    );
  };

  render() {
    let { infiniteList, hasmore } = this.props.relaxProps;
    //infiniteList是immutable数据 需要toJS()
    let list = infiniteList.toJS();
    return (

      <div onScroll={this._handleScroll}
        style={{
          height: '300',
          overflow: 'auto',
        }}>

        {/* 在微信端渲染可视item时 有bug
        <List>
          <RcListView rowCount={list.length}
            rowHeight={70}
            height={this.state.clientHeight}
            renderItem={(index, style) =>
              <div style={style}>
                {this._renderRow(list[index])}
              </div>
            } />
        </List>*/}

        <List selectable ripple>
          {list.map(item =>
            this._renderRow(item)
          )}
        </List>
        {hasmore ?
          <div className={styles.center}>
            <ProgressBar
              className={styles.small}
              type='circular'
              mode='indeterminate'
              multicolor />
          </div>
          : null}
      </div>
    );
  }

}