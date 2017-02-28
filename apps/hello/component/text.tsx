import * as React from 'react'
import { Relax, storeMethod, storePath } from 'plume2'

const styles: any = require("./text.css");

const noop = () => { }

type Handler = () => void;

interface IProps {
  count?: number; //不需要外界传递，直接通过Relax注入
  text?: string;  //不需要外界传递，直接通过Relax注入
  increment?: Handler; //不需要外界传递，直接通过Relax注入
}

@Relax
export default class Text extends React.Component<IProps, any> {
  static defaultProps = {
    count: storePath('count', 0),
    text: '',
    increment: storeMethod('increment', () => { }),
  };

  render() {
    const {count, text, increment} = this.props

    return (
      <div className="title">
        <div>hello plume2-start</div>
        <div className={styles.title}>
          {text}
          <a href={'javascript:;'} onClick={increment}>
            点赞(+{count})
        </a>
        </div>
      </div>
    )
  }
}