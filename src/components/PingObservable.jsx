/**
 * @Date:   11.12.17
 * @Filename: PingObservable.jsx
 * @Last modified time: 11.15.2017 09:08pm
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ping } from '../actions';

const PingObservable = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
    <hr />
    <Link to='/'>Back</Link>
  </div>
);


const mapState = (state) => ({
  isPinging: state.pingReducer.isPinging,
});

export default connect(mapState, { ping })(PingObservable);
