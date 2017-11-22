/**
 * @Author: wiz
 * @Date:   11.13.2017 01:02pm
 * @Filename: epics.js
 * @Last modified by:   wiz
 * @Last modified time: 11.18.2017 10:09am
 */

import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

import {
  PING,
  PONG,
  BEEP,
  BOOP,
  FETCH_USER,
  // FETCH_USER_FULFILLED,
  fetchUserFullfilled,
  FETCH_REPO,
  // FETCH_REPO_FULFILLED,
  fetchRepoFullfilled,
  FETCH_USER_CANCELLED,
  FETCH_YOUTUBE,
} from '../actions';


const fetchYoutubeEpic = (action$) => (
  action$.ofType(FETCH_YOUTUBE)
    .map(({ value }) => value)
    .mergeMap(value => (
      ajax.getJSON(`https://api.github.com/users/${value}`)
        .map(fetchUserFullfilled)
    ))
    .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
);


const fetchUserEpic = (action$) => (
  action$.ofType(FETCH_USER)
    .map(({ value }) => value)
    // .debounceTime(4000)
    .mergeMap((value) => (
      Observable.timer(2000)
        .mergeMap(() => (
          ajax.getJSON(`https://api.github.com/users/${value}`)
            .map(fetchUserFullfilled)
        ))
        .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
    ))
);


const fetchRepoEpic = (action$) => (
  action$.ofType(FETCH_REPO)
    // .do((items) => console.log('do log items', items))
    .map(({ value }) => value)
    .mergeMap((value) => (
      ajax.getJSON(`https://api.github.com/users/${value}/repos`)
    ))
    .mergeMap((val) => val)
    // .do((items) => console.log('do log items', items))
    .map(({ id }) => id)
    .map(fetchRepoFullfilled)
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
      .mapTo({ type: BOOP, foo: 'bars' })
  );
};


const rootEpic = combineEpics(
  pingEpic,
  beepEpic,
  fetchUserEpic,
  fetchRepoEpic,
  fetchYoutubeEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
