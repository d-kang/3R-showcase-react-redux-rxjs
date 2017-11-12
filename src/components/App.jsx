import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main';
// import PingObservable from './PingObservable';
// import BeepObservable from './BeepObservable';
import MyDrawer from './MyDrawer';

export class App extends Component {
  state = {
    hasError: false,
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    console.log('err >> info >>', err, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div>
        <Main />
      </div>
    );
  }
}

const mapState = (state) => ({ state });

export default connect(mapState)(App);
