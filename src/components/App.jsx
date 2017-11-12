import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import PingObservable from './PingObservable';
import NewObservable from './NewObservable';
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
        <PingObservable />
        <NewObservable />
        <MyDrawer />
      </div>
    );
  }
}

const mapState = (state) => ({ state });

export default connect(mapState)(App);
