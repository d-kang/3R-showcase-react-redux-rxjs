import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';

import { createEpicMiddleware } from 'redux-observable';
// import { switchMap } from 'rxjs/operator/switchMap';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';


const PING = 'PING';
const PONG = 'PONG';

const pingEpic = (action$) => (
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG })
);


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

const BEEP = 'BEEP';
const BOOP = 'BOOP';

const beepEpic = (action$) => (
  action$.ofType(BEEP)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: BOOP })
);

const beepReducer = (state = { isBeeping: 'boop' }, action) => {
  switch (action.type) {
    case BEEP:
      return { isBeeping: 'beep' };
    case BOOP:
      return { isBeeping: 'boop' };
    default:
      return state;
  }
};

const epicMiddleware = createEpicMiddleware(pingEpic, beepEpic);
const reducers = combineReducers({ pingReducer, beepReducer });

export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, epicMiddleware),
    window.devToolsExtension(),
  ),
);
