/**
 * @Author: wiz
 * @Date:   11.13.2017 01:02pm
 * @Filename: epics.js
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 07:48pm
 */

import { createEpicMiddleware, combineEpics } from 'redux-observable';

export const PING = 'PING';
export const PONG = 'PONG';
export const BEEP = 'BEEP';
export const BOOP = 'BOOP';
export const GITHUBFETCH = 'GITHUBFETCH';
export const GITHUBRESPONSE = 'GITHUBRESPONSE';

import { ajax } from 'rxjs/observable/dom/ajax';

console.log('ajax', ajax);
ajax.getJSON(`https://api.github.com/users/d-kang`)
  .subscribe(res => console.log('res', res));

const fetchUserFullfilled = value => ({ type: 'GITHUBRESPONSE', value});

const githubEpic = (action$) => {
  console.log('githubEpic Ran')
  return (
    action$.ofType(GITHUBFETCH)
      .mergeMap(action => {
        return (
          ajax.getJSON(`https://api.github.com/users/${action.value}`)
            .map(response => fetchUserFullfilled(response))
        );
      })
  );
};


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
      .mapTo({ type: BOOP, foo: 'bar', log: console.log('beepEpic Ran') })
  );
};


const rootEpic = combineEpics(pingEpic, beepEpic, githubEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
