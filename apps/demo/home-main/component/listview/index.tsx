import * as React from 'react'
import { Relax } from 'plume2'
import { List, ListItem, ListSubHeader } from 'react-toolbox'

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
export default class ListView extends React.Component<IProps, any>
{
  static relaxProps = {
    list: 'list'
  };


  render() {
    let { list } = this.props.relaxProps;
    return (
      <div>
        <List selectable ripple>

          {list.map(item =>
            <ListItem
              avatar={item.author.avatar_url}
              caption={item.author.loginname}
              legend={item.title}
              rightIcon='star'
            />
          )}
        </List>
      </div>
    );
  }

  _renderListItem() {


  }
}