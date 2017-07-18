/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { Relax } from 'plume2';
import { List, ListItem } from 'react-toolbox';
import { hashHistory } from 'react-router';

/**
 *react-toolbox 的listview组件演示 
 */
interface ListType {
  author?: {
    avatar_url: string;
    loginname: string;
  };
  author_id?: string;
  content?: string;
  create_at: string;
  good?: boolean;
  id?: string;
  last_reply_at?: string;
  reply_count?: number;
  tab?: string;
  title?: string;
  top?: boolean;
  visit_count?: number;
}

interface IProps {
  relaxProps?: {
    list: Array<ListType>;
  };
}

@Relax
export default class ListView extends React.Component<IProps, any> {
  static relaxProps = {
    list: 'list'
  };

  render() {
    const { list } = this.props.relaxProps;
    return (
      <div>
        <List selectable ripple>
          {list.map(item =>
            <ListItem
              avatar={item.author.avatar_url}
              caption={item.author.loginname}
              legend={item.title}
              rightIcon="star"
              onClick={() => this.onhandleclick(item.id)}
            />
          )}
        </List>
      </div>
    );
  }

  onhandleclick = id => {
    console.log('onclick', id);
    hashHistory.push(`detail/${id}`);
  };
}
