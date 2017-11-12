/**
 * @Date:   11.12.17
 * @Filename: App.jsx
 * @Last modified time: 11.12.2017 12:58pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <Link to='/'>Home</Link>
        <Main />
      </div>
    );
  }
}

const mapState = (state) => ({ state });

export default connect(mapState)(App);
