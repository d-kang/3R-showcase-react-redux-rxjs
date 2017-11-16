/**
 * @Date:   11.12.17
 * @Filename: App.jsx
 * @Last modified time: 11.15.2017 08:39pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <div>Welcome to Landing Page</div>
      </div>
    );
  }
}

const mapState = (state) => ({ state });

export default connect(mapState)(App);
