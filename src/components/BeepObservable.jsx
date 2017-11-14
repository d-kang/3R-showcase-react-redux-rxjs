/**
 * @Date:   11.12.17
 * @Filename: BeepObservable.jsx
 * @Last modified time: 11.13.2017 04:57pm
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingIndicator from './ui/LoadingIndicator';
const beep = () => ({ type: 'BEEP' });

const BeepObservable = ({ isBeeping, beep, foo }) => (
  <div>
    <h1>is beeping: {isBeeping.toString()}</h1>
    <div>foo: {foo}</div>
    <button onClick={beep}>Start Beep</button>
    {
      isBeeping
        && <LoadingIndicator />
    }
    <hr />
    <Link to='/'>Back</Link>
  </div>
);

const mapState = (state) => ({
  log: console.log('state', state),
  isBeeping: state.beepReducer.isBeeping,
  foo: state.beepReducer.foo,
});

export default connect(mapState, { beep })(BeepObservable);
