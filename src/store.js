/**
 * @Author: wiz
 * @Date:   11.12.2017 02:28pm
 * @Filename: store.js
 * @Last modified by:   wiz
 * @Last modified time: 11.14.2017 08:52pm
 */

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';

import epicMiddleware, {
  PING,
  PONG,
  BEEP,
  BOOP,
  FETCH_USER_FULFILLED,
} from './epics';
// import { switchMap } from 'rxjs/operator/switchMap';

// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/mapTo';


const pingState = {
  isPinging: false,
};
const beepState = {
  isBeeping: false,
  someArr: [1, 2, 3, 4, 5],
};

const githubState = {
  isLoading: false,
  value: '',
  githubResponse: [],
};

const fetchUserReducer = (state = githubState, action) => {
  console.log('githubReducer RAN >> action.type >>', action.type, action);
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        githubResponse: [...state.githubResponse, action.payload],
      };
    default:
      return state;
  }
};


const pingReducer = (state = pingState, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };
    case PONG:
      return { isPinging: false };
    default:
      return state;
  }
};


const beepReducer = (state = beepState, action) => {
  switch (action.type) {
    case BEEP:
      return {
        isBeeping: true,
        someArr: [],
        foo: 'ooooo',
        log: console.log('BEEP RAN in REDUCER'),
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

const reducers = combineReducers(reducerObj);
export const history = createBrowserHistory();

export default createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(logger, epicMiddleware, routerMiddleware(history)),
    window.devToolsExtension(),
  ),
);
// export default createStore(
//   reducers,
//   compose(
//     applyMiddleware(logger, epicMiddleware),
//     window.devToolsExtension(),
//   ),
// );
