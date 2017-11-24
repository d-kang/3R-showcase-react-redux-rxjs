/**
 * @Date:   11.12.17
 * @Filename: BeepObservable.jsx
 * @Last modified time: 11.15.2017 09:08pm
 */

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
    {isBeeping  && <Loader />}
    <hr />
    <Link to='/'>Back</Link>
  </div>
);


const mapState = state => ({
  isBeeping: state.beepReducer.isBeeping,
  foo: state.beepReducer.foo,
});

export default connect(mapState, { beep })(BeepObservable);
