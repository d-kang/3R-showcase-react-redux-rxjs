/**
 * @Date:   11.15.2017 08:17am
 * @Filename: reducers.js
 * @Last modified time: 11.18.2017 10:09am
 */

import { combineReducers } from 'redux';
import {
  PING,
  PONG,
  BEEP,
  BOOP,
  FETCH_USER,
  FETCH_USER_FULFILLED,
  FETCH_REPO,
  FETCH_REPO_FULFILLED,
  FETCH_USER_CANCELLED,
  FETCH_YOUTUBE,
  FETCH_YOUTUBE_FULFILLED,
} from '../actions';
import youTubeSampleData from '../data/data.json';

const initialState = {
  ping: {
    isPinging: false,
  },
  beep: {
    isBeeping: false,
    someArr: [1, 2, 3, 4, 5],
  },
  githubUser: {
    isLoading: false,
    value: '',
    fetchUserResponse: [],
  },
  githubRepos: {
    isLoading: false,
    value: '',
    fetchRepoResponse: [],
  },
  youtube: {
    isLoading: false,
    value: '',
    fetchYoutubeResponse: [...youTubeSampleData.items],
  },
};


const fetchYoutubeReducer = (state = initialState.youtube, action) => {
  console.log('yt action>>>', action);
  switch (action.type) {
    case FETCH_YOUTUBE:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_YOUTUBE_FULFILLED:
      return {
        ...state,
        fetchYoutubeResponse: [...action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};


const fetchUserReducer = (state = initialState.githubUser, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_CANCELLED:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        fetchUserResponse: [action.payload, ...state.fetchUserResponse],
        isLoading: false,
      };
    default:
      return state;
  }
};
const fetchRepoReducer = (state = initialState.githubRepos, action) => {
  switch (action.type) {
    case FETCH_REPO:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_REPO_FULFILLED:
      return {
        ...state,
        fetchRepoResponse: [action.payload, ...state.fetchRepoResponse],
        isLoading: false,
      };
    default:
      return state;
  }
};


const pingReducer = (state = initialState.ping, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };
    case PONG:
      return { isPinging: false };
    default:
      return state;
  }
};


const beepReducer = (state = initialState.beep, action) => {
  switch (action.type) {
    case BEEP:
      return {
        isBeeping: true,
        someArr: [],
        foo: 'ooooo',
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

const reducerObj = {
  pingReducer,
  beepReducer,
  fetchUserReducer,
  fetchRepoReducer,
  fetchYoutubeReducer,
};

const rootReducer = combineReducers(reducerObj);

export default rootReducer;
