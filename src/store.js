import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';

import { createEpicMiddleware, combineEpics } from 'redux-observable';
// import { switchMap } from 'rxjs/operator/switchMap';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';


const PING = 'PING';
const PONG = 'PONG';

const pingEpic = (action$) => {
  console.log('pingEpic');
  return (
    action$.ofType(PING)
      .delay(1000) // Asynchronously wait 1000ms then continue
      .mapTo({ type: PONG })
  )
}



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

const beepEpic = (action$) => {
  console.log('beepEpic')
  return (
    action$.ofType(BEEP)
      .delay(1000) // Asynchronously wait 1000ms then continue
      .mapTo({ type: BOOP })
  );
};


const beepReducer = (state = { isBeeping: false }, action) => {
  console.log('beepReducer')
  switch (action.type) {
    case BEEP:
      return { isBeeping: true };
    case BOOP:
      return { isBeeping: false };
    default:
      return state;
  }
};


const rootEpic = combineEpics(pingEpic, beepEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const reducers = combineReducers({ pingReducer, beepReducer });

export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, epicMiddleware),
    window.devToolsExtension(),
  ),
);
