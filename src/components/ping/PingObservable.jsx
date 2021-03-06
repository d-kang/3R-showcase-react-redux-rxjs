import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ping } from '../../actions';
import Loader from '../ui/Loader';

const PingObservable = ({ isPinging, ping, isLoading }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
    <Loader isLoading={isPinging} />
    <hr />

    <Link to='/'>Back</Link>
  </div>
);


const mapState = ({ pingReducer: reducer }) => ({
  isPinging: reducer.isPinging,
  isLoading: reducer.isLoading,
});

export default connect(mapState, { ping })(PingObservable);
