
import * as React from 'react'
import { Relax } from 'plume2'
import { List, ListItem, Link } from 'react-toolbox'
import VirtualList from './preact-virtual-list'

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
    list: Array<ListType>

  }
}

@Relax
export default class VirtualListView extends React.Component<IProps, any>
{
  static relaxProps = {
    list: 'list'
  };

  _renderRow(row) {
    console.log("data", row);
    return (
      <Link active href={`#/detail/${row.id}`}>
        <ListItem
          avatar={row.author.avatar_url}
          caption={row.author.loginname}
          legend={row.title}
          rightIcon='star'

        />
      </Link>

    );

  };

  render() {
    let { list } = this.props.relaxProps;
    return (
      <List>
        <VirtualList
          sync
          className={styles.list}
          data={list}
          rowHeight={70}
          renderRow={this._renderRow}
        />
      </List>
    );
  }

}