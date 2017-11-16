/**
 * @Author: wiz
 * @Date:   11.13.2017 01:02pm
 * @Filename: epics.js
 * @Last modified by:   wiz
 * @Last modified time: 11.15.2017 08:47pm
 */

import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  PING,
  PONG,
  BEEP,
  BOOP,
  FETCH_USER,
  FETCH_USER_FULFILLED,
} from './actionTypes';

// const fetchUser = (username) => ({
//   type: FETCH_USER,
//   isLoading: true,
//   value: username,
// });
const fetchUserFullfilled = (payload) => ({
  logger: console.log('payload', payload),
  type: FETCH_USER_FULFILLED,
  payload,
});


const fetchUserEpic = (action$) => (
  action$.ofType(FETCH_USER)
    .mergeMap((action) => {
      return (
        ajax.getJSON(`https://api.github.com/users/${action.value}`)
          .map(fetchUserFullfilled)
      )
    })
);


const pingEpic = (action$) => {
  return (
    action$.ofType(PING)
      .delay(1000) // Asynchronously wait 1000ms then continue
      .mapTo({ type: PONG })
  );
};

const beepEpic = (action$) => {
  return (
    action$.ofType(BEEP)
      .delay(3500) // Asynchronously wait 1000ms then continue
      .mapTo({ type: BOOP, foo: 'bars', log: console.log('beepEpic Ran') })
  );
};


const rootEpic = combineEpics(pingEpic, beepEpic, fetchUserEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
