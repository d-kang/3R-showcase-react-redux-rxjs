/**
 * @Date:   11.15.2017 08:19pm
 * @Filename: actionTypes.js
 * @Last modified time: 11.18.2017 10:10am
 */

import * as types from './actionTypes';

// ping beep
export const ping = () => ({ type: types.PING });

export const beep = () => ({ type: types.BEEP });

// github
export const fetchUserAction = value => ({
  type: types.FETCH_USER,
  isLoading: true,
  value,
});

export const fetchRepoAction = value => ({
  type: types.FETCH_REPO,
  isLoading: true,
  value,
});

export const fetchUserFullfilled = payload => ({
  type: types.FETCH_USER_FULFILLED,
  payload,
});

export const fetchRepoFullfilled = payload => ({
  type: types.FETCH_REPO_FULFILLED,
  payload,
});

export const fetchUserCancelled = () => ({
  type: types.FETCH_USER_CANCELLED,
});

// youtube
export const fetchYoutube = payload => ({
  type: types.FETCH_YOUTUBE,
  isLoading: true,
  payload,
});

export const fetchYoutubeFullfilled = payload => ({
  type: types.FETCH_YOUTUBE_FULFILLED,
  payload,
});

// youtube current videos action creators
export const setCurrentVideo = foo => ({
  type: types.SET_CURRENT_VIDEO,
  foo,
});


export const fetchRejected = payload => ({
  type: types.FETCH_REJECTED,
  payload,
  error: true,
});
