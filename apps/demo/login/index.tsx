import * as React from 'react'
import { Card, CardTitle, CardMedia, CardActions, CardText, Button, Input, ProgressBar } from 'react-toolbox'
import { StoreProvider,Relax} from 'plume2'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

import AppStore from './store'

const noop = () => { }

type Handler = () => void;

// interface TProps {
//   loading?: boolean; //injected by store's second
//   setloading:Handler;

//   // handleChange?: Handler; //injected by store's start 
//   // handleClick?: Handler; //injected by store's reset
// }


@StoreProvider(AppStore, { debug: __DEV__ })
//@Relax
export default class Login extends React.Component<any, any>
{

  store: AppStore;

  // static defaultProps = {
  //   loading: storePath('loading',false),
  //   //handleChange:noop,
  //   setloading:storeMethod('setloading')
  // };

  constructor() {
    super();


  }

  componentDidMount() {
    this.store.init();
  }

  handleChange = () => {
    console.log("handleClick")
  }
  handleClick = () => {
    console.log("handleClick")
  }

  render() {
    console.log("this.props", this.props);
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
            Home
          </Button>
        </CardActions>
      </Card>
    );
  }
}