// import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// class NewObservable extends Component {
//
//   render() {
//     const { isBeeping, beep } = this.props;
//     console.log('beep', beep);
//     console.log('isBeeping', isBeeping);
//     return (
//       <div>
//         <h1>is beeping: {isBeeping}</h1>
//         <button onClick={beep}>Start BEEP</button>
//       </div>
//     );
//   }
// }
//
// const beep = () => ({ type: 'BEEP' });
//
// const mapState = (state) => ({
//   log: console.log('state', state),
//   isBeeping: state.beepReducer.isBeeping,
// });
//
// export default connect(mapState, { beep })(NewObservable);


import React from 'react';
import { connect } from 'react-redux';
const beep = () => ({ type: 'BEEP' });

const NewObservable = ({ isBeeping, beep }) => (
  <div>
    <h1>is beeping: {isBeeping.toString()}</h1>
    <button onClick={beep}>Start Beep</button>
  </div>
);

const mapState = (state) => ({
  isBeeping: state.beepReducer.isBeeping,
});

export default connect(mapState, { beep })(NewObservable);
