/**
 * @Author: wiz
 * @Date:   11.15.2017 08:19pm
 * @Filename: actionTypes.js
 * @Last modified by:   wiz
 * @Last modified time: 11.18.2017 10:10am
 */

export const PING = 'PING';
export const PONG = 'PONG';
export const BEEP = 'BEEP';
export const BOOP = 'BOOP';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_REPO = 'FETCH_REPO';
export const FETCH_REPO_FULFILLED = 'FETCH_REPO_FULFILLED';
export const FETCH_USER_CANCELLED = 'FETCH_USER_CANCELLED';
export const FETCH_YOUTUBE = 'FETCH_YOUTUBE';
export const FETCH_YOUTUBE_FULFILLED = 'FETCH_YOUTUBE_FULFILLED';

export const fetchYoutube = payload => ({
  type: FETCH_YOUTUBE,
  isLoading: true,
  payload,
});
export const fetchYoutubeFullfilled = payload => ({
  // logger: console.log('logger payload fetchUserFullfilled', payload),
  type: FETCH_YOUTUBE_FULFILLED,
  payload,
});
export const fetchUserCancelled = () => ({
  type: FETCH_USER_CANCELLED,
});

export const ping = () => ({ type: PING });

export const beep = () => ({ type: BEEP });

export const fetchUserAction = value => ({
  type: FETCH_USER,
  isLoading: true,
  value,
});

export const fetchRepoAction = value => ({
  type: FETCH_REPO,
  isLoading: true,
  value,
});

export const fetchUserFullfilled = payload => ({
  // logger: console.log('logger payload fetchUserFullfilled', payload),
  type: FETCH_USER_FULFILLED,
  payload,
});


export const fetchRepoFullfilled = payload => ({
  // logger: console.log('logger payload fetchRepoFullfilled', payload),
  type: FETCH_REPO_FULFILLED,
  payload,
});
