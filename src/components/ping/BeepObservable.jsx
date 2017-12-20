import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { beep } from '../../actions';
import Loader from '../ui/Loader';

const BeepObservable = ({ isBeeping, beep, foo }) => (
  <div>
    <h1>is beeping: {isBeeping.toString()}</h1>
    <div>foo: {foo}</div>
    <button onClick={beep}>Start Beep</button>
    <Loader isLoading={isBeeping} />
    <hr />
    <Link to='/'>Back</Link>
  </div>
);


const mapState = state => ({
  isBeeping: state.beepReducer.isBeeping,
  foo: state.beepReducer.foo,
});

export default connect(mapState, { beep })(BeepObservable);
