import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewObservable extends Component {

  render() {
    const { somePinging, somePing } = this.props;
    return (
      <div>
        <h1>is pinging: {somePinging.toString()}</h1>
        <button onClick={somePing}>Start PING</button>
      </div>
    );
  }
}

const somePing = () => ({ type: 'PING' });

const mapState = (state) => ({
  somePinging: state.someReducer.somePinging,
});

export default connect(mapState, { somePing })(NewObservable);
