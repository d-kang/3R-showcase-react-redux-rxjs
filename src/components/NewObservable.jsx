import React from 'react';
import { connect } from 'react-redux';
const beep = () => ({ type: 'BEEP' });

const NewObservable = ({ isBeeping, beep, foo }) => (
  <div>
    <h1>is beeping: {isBeeping.toString()}</h1>
    <div>foo: {foo}</div>
    <button onClick={beep}>Start Beep</button>
  </div>
);

const mapState = (state) => ({
  log: console.log('state', state),
  isBeeping: state.beepReducer.isBeeping,
  foo: state.beepReducer.foo,
});

export default connect(mapState, { beep })(NewObservable);
