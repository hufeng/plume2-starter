import * as React from 'react'
import { Relax } from 'plume2'
import { List, ListItem, ListSubHeader, ProgressBar } from 'react-toolbox'

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
    infiniteList: Array<ListType>,
    hasmore: boolean,
    setHasmore: Handler,
    getMoreData: Handler,
    initInfiniteList: Handler
  }
}


@Relax
export default class InfiniteListView extends React.Component<IProps, any>
{
  base: any;

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
      /** state example
      hasmore: false,
      infiniteList: [],
      page: 10,
      */
    };
  }

  componentDidMount() {
    this.setState({
      clientHeight: this.base.clientHeight,
      scrollTop: this.base.scrollTop,
    });
    this.props.relaxProps.initInfiniteList();
    /** state example
    console.log("this", this, this.base, this.state)
    let { page, infiniteList } = this.state;
    for (let x = page; x--;) infiniteList[x] = `Item #${x + 1}`;

    this.setState({
      page: page,
      infiniteList: infiniteList
    });
     */
  }

  _handleScroll = (e) => {
    let { clientHeight, scrollHeight, scrollTop } = e.target;
    let { infiniteList, hasmore, setHasmore, getMoreData } = this.props.relaxProps;
    if (scrollHeight - clientHeight === scrollTop) {
      console.log("hasmore", hasmore);
      if (!hasmore) {
        setHasmore();
      } else {
        getMoreData();
      }


    }



    /** state example
    let { clientHeight, scrollHeight, scrollTop } = e.target;
    let { page, infiniteList } = this.state;
    page = page + 10;
    if (scrollHeight - clientHeight == scrollTop) {
      this.setState({
        hasmore: true,
      });
      setTimeout(() => {

        for (let x = page; x--;) {
          infiniteList[x] = `Item #${x + 1
            }`
        };

        this.setState({
          hasmore: false,
          page: page,
          infiniteList: infiniteList
        });

      }, 2000);
    }
     */
  }


  _renderRow(row) {
    //console.log(row)
    return (
      <ListItem
        avatar={row.author.avatar_url}
        caption={row.author.loginname}
        legend={row.title}
        rightIcon='star'
      />
    );
    /**state example
    console.log("data", row);
    return row;
     */


  };

  render() {
    let { infiniteList, hasmore } = this.props.relaxProps;
    console.log("render------>")
    //console.log(infiniteList, infiniteList.length)
    //let { hasmore,page, infiniteList } = this.state;  //state example
    return (
      <List>
        <div onScroll={this._handleScroll}
          style={{
            height: '210',
            overflow: 'auto',
            //background: '#000'
          }}>
          <RcListView rowCount={infiniteList.length}
            rowHeight={70}
            height={this.state.clientHeight}
            renderItem={(index, style) =>
              <div style={style}>
                {this._renderRow(infiniteList[index])}
              </div>
            } />

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
      </List>
    );
  }

}