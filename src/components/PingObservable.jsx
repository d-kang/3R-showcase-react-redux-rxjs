import React from 'react';
import { connect } from 'react-redux';

const PingObservable = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);


const ping = () => ({ type: 'PING' });

// const mapState = ({ isPinging }) => ({ isPinging });
const mapState = (state) => ({
  isPinging: state.pingReducer.isPinging,
});

export default connect(mapState, { ping })(PingObservable);
