/**
 * @Date:   11.12.17
 * @Filename: App.jsx
 * @Last modified time: 11.15.2017 07:45pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Main from './Main';
// import PingObservable from './PingObservable';
// import BeepObservable from './BeepObservable';
import MyDrawer from './ui/MyDrawer';

class App extends Component {
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
        <Link to='/'>Home</Link>
        <div>Landing Page!</div>
      </div>
    );
  }
}

const mapState = (state) => ({ state });

export default connect(mapState)(App);
