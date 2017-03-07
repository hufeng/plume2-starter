import * as React from 'react'
import { Relax } from 'plume2'
import { List, ListItem, ListSubHeader } from 'react-toolbox'

import RcListView from 'rc-list-view'
const styles: any = require("./index.css")


import { noop } from '../../../plume-utils'

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
    list: Array<ListType>

  }
}

@Relax
export default class PullRefreshList extends React.Component<IProps, any>
{

  base: any;

  static relaxProps = {
    list: 'list'
  };

  getInitialState() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      scrollTop: 0
    };
  }

  componentDidMount() {
    console.log("this", this, this.base)
    this.setState({
      clientHeight: this.base.clientHeight,
      clientWidth: this.base.clientWidth,
      scrollTop: this.base.scrollTop,
    });
  }

  _handleScroll(e) {

    console.log(e, e.target.scrollTop)

  }


  _renderRow(row) {
    //console.log("data", row);
    return (
      <ListItem
        avatar={row.author.avatar_url}
        caption={row.author.loginname}
        legend={row.title}
        rightIcon='star'
      />

    );

  };

  render() {
    let { list } = this.props.relaxProps;
    return (
      <div onScroll={this._handleScroll}
        style={{
          height: '100%',
          overflow: 'auto',
          //background: '#000'
        }}>
        <RcListView rowCount={list.length}
          rowHeight={70}
          height={this.state.clientHeight}
          renderItem={(line, style) => <div style={style}>{this._renderRow(list[line])}</div>} />
      </div>
    );
  }

  _renderListItem() {


  }
}