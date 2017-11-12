import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';

import epicMiddleware, { PING, PONG, BEEP, BOOP } from './epics';
// import { switchMap } from 'rxjs/operator/switchMap';

// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/mapTo';

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };
    case PONG:
      return { isPinging: false };
    default:
      return state;
  }
};

const beepState = {
  isBeeping: false,
  someArr: [1, 2, 3, 4, 5],
  // foo: 'NaN',
};
const beepReducer = (state = beepState, action) => {
  console.log('beepReducer action', action);
  switch (action.type) {
    case BEEP:
      return {
        isBeeping: true,
        someArr: [],
        // foo: 'NaN'
      };
    case BOOP:
      return {
        isBeeping: false,
        someArr: action.foo,
        foo: action.foo,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({ pingReducer, beepReducer });

export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, epicMiddleware),
    window.devToolsExtension(),
  ),
);
