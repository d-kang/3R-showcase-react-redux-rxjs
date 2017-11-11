import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PingObservable from './PingObservable';

export class App extends Component {
  state = {
    hasError: false
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    console.log('1111111', err, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    console.log('<App /> this', this);
    return (
      <div>
        <PingObservable />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    state
  }
}

export default connect(mapState)(App);
