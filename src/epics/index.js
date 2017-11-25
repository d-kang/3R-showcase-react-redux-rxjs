/**
 * @Date:   11.13.2017 01:02pm
 * @Filename: epics.js
 * @Last modified time: 11.18.2017 10:09am
 */

import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import * as types from '../actions/actionTypes';
import * as creators from '../actions';

const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const fetchYoutubeEpic = action$ => (
  action$.ofType(types.FETCH_YOUTUBE)
    .do(items => console.log('do log items FIRST', items))
    .map(({ payload }) => payload)
    .do(items => console.log('do log items SECOND', items))
    .mergeMap(payload => (
      ajax({
        url: 'http://localhost:3500/api/youtube',
        method: 'POST',
        headers,
        body: JSON.stringify({ payload }),
      })
        .do(items => console.log('do log items THIRD', items))
        .map(({ response }) => response)
        .map(({ items }) => items)
        .map(creators.fetchYoutubeFullfilled)
    ))
    // .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
);


const fetchUserEpic = action$ => (
  action$.ofType(types.FETCH_USER)
    .mergeMap(({ value }) => (
      ajax.getJSON(`https://api.github.com/users/${value}`)
        .map(creators.fetchUserFullfilled)
        .takeUntil(action$.ofType(types.FETCH_USER_CANCELLED))
        .catch(err => Observable.of(creators.fetchRejected(err)))
    ))
);


const fetchRepoEpic = action$ => (
  action$.ofType(types.FETCH_REPO)
    .map(({ value }) => value)
    .mergeMap(value => (
      ajax.getJSON(`https://api.github.com/users/${value}/repos`)
    ))
    .mergeMap(repo => repo)
    .map(repo => ({
      repo_name: repo.name,
      username: repo.owner.login,
      avatar: repo.owner.avatar_url,
      repo_url: repo.html_url,
      description: repo.description,
      commits: repo.commits_url,
    }))
    .map(creators.fetchRepoFullfilled)
);


const pingEpic = action$ => (
  action$.ofType(types.PING)
    .mergeMap(() => (
      ajax.getJSON('http://localhost:3500/api/ping')
        .mapTo({ type: types.PONG })
    ))
);


const beepEpic = action$ => (
  action$.ofType(types.BEEP)
    .mergeMap(() => (
      ajax.getJSON('http://localhost:3500/api/ping')
        .mapTo({ type: types.BOOP })
    ))
);


const rootEpic = combineEpics(
  pingEpic,
  beepEpic,
  fetchUserEpic,
  fetchRepoEpic,
  fetchYoutubeEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
