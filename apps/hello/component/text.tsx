import * as React from 'react';
import { Relax } from 'plume2';

const styles: any = require('./text.css');
const noop = () => {};

type Handler = () => void;

interface IProps {
  relaxProps?: {
    count?: number; //不需要外界传递，直接通过Relax注入
    text?: string; //不需要外界传递，直接通过Relax注入
    increment?: Handler; //不需要外界传递，直接通过Relax注入
  };
}

@Relax
export default class Text extends React.Component<IProps, any> {
  static relaxProps = {
    text: 'text',
    count: 'count',

    increment: noop
  };

  render() {
    const { count, text, increment } = this.props.relaxProps;

    return (
      <div className="title">
        <div>hello plume2-starter</div>
        <div className={styles.title}>
          {text}
          <a href={'javascript:;'} onClick={increment}>
            Like(+{count})
          </a>
        </div>
      </div>
    );
  }
}
