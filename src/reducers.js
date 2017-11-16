/**
 * @Date:   11.15.2017 08:17am
 * @Filename: reducers.js
 * @Last modified time: 11.15.2017 08:58pm
 */

import { combineReducers } from 'redux';
import {
  PING,
  PONG,
  BEEP,
  BOOP,
  FETCH_USER,
  FETCH_USER_FULFILLED,
} from './actionTypes';

const initialState = {
  ping: {
    isPinging: false,
  },
  beep: {
    isBeeping: false,
    someArr: [1, 2, 3, 4, 5],
  },
  github: {
    isLoading: false,
    value: '',
    fetchUserResponse: [],
  },
};

const fetchUserReducer = (state = initialState.github, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isLoading: true,
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
};

const rootReducer = combineReducers(reducerObj);

export default rootReducer;
