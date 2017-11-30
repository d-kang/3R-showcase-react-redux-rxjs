/**
 * @Date:   11.15.2017 08:19pm
 * @Filename: actionTypes.js
 * @Last modified time: 11.29.2017 04:20pm
 */

import * as types from './actionTypes';

// ping beep
export const ping = () => ({ type: types.PING });

export const beep = () => ({ type: types.BEEP });

// github
export const fetchUserAction = (value: string) => ({
  type: types.FETCH_USER,
  isLoading: true,
  value,
});

export const fetchRepoAction = (value: string) => ({
  type: types.FETCH_REPO,
  isLoading: true,
  value,
});

export const fetchUserFullfilled = (payload: string) => ({
  type: types.FETCH_USER_FULFILLED,
  payload,
});

export const fetchRepoFullfilled = (payload: string) => ({
  type: types.FETCH_REPO_FULFILLED,
  payload,
});

export const fetchUserCancelled = () => ({
  type: types.FETCH_USER_CANCELLED,
});

// youtube
export const fetchYoutube = (payload: string) => ({
  type: types.FETCH_YOUTUBE,
  isLoading: true,
  payload,
});

export const fetchYoutubeFullfilled = (payload: string) => ({
  type: types.FETCH_YOUTUBE_FULFILLED,
  payload,
});

// youtube current videos action creators
export const setCurrentVideo = (foo: string) => ({
  type: types.SET_CURRENT_VIDEO,
  foo,
});


export const fetchRejected = (payload: string) => ({
  type: types.FETCH_REJECTED,
  payload,
  error: true,
});


export const listCommits = (apiUrl: string) => ({
  type: types.LIST_COMMITS,
  isLoading: true,
  apiUrl,
});

export const listCommitsFullfilled = (payload: any[]) => ({
  type: types.LIST_COMMITS_FULLFILLED,
  payload,
});
