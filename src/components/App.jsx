import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends React.Component {
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

const mapState = state => ({ state });

export default connect(mapState)(App);
