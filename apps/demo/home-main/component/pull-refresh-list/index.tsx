/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react'
import { Relax } from 'plume2'
import { List, ListItem } from 'react-toolbox'
import { hashHistory } from 'react-router'
import RcListView from 'rc-list-view'

/**
 * homeMain 中的使用rc-list-view 组件list演示
 */

/**
 * topic 数据接口定义
 */
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

/**
 * 组件的props类型定义
 * 
 */
interface IProps {
  relaxProps?: {
    list: Array<ListType>
  }
}


/**
 * @Relax plume2 的核心组件
 * 把store和actor中的数据绑定到view
 */
@Relax
export default class PullRefreshList extends React.Component<IProps, any>
{

  base: any;

  /**
   * plume2 中在组件中引用actor数据的定义
   */
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
    //console.log("this", this, this.base)
    this.setState({
      clientHeight: this.base.clientHeight,
      clientWidth: this.base.clientWidth,
      scrollTop: this.base.scrollTop,
    });
  }

  _handleScroll(e) {

    console.log(e, e.target.scrollTop)

  }

  /**
   * @params id list的id
   */
  onhandleclick = (id) => {
    console.log("onclick", id);
    hashHistory.push(`detail/${id}`)
  }


  _renderRow(row) {
    //console.log("data", row);
    return (
      <List>
        <ListItem
          avatar={row.author.avatar_url}
          caption={row.author.loginname}
          legend={row.title}
          rightIcon='star'
          onClick={this.onhandleclick.bind(null, row.id)}
        />
      </List>

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


}