/**
 * @Author: wiz
 * @Date:   11.12.2017 02:28pm
 * @Filename: store.js
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 07:48pm
 */

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
  GITHUBFETCH,
  GITHUBRESPONSE,
} from './epics';
// import { switchMap } from 'rxjs/operator/switchMap';

// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/mapTo';

const githubState = {
  isLoading: false,
  value: '',
  githubResponse: [],
};
const pingState = {
  isPinging: false,
};
const beepState = {
  isBeeping: false,
  someArr: [1, 2, 3, 4, 5],
};

const githubReducer = (state = githubState, action) => {
  console.log('githubReducer RAN >> action.type >>', action.type);
  switch (action.type) {
    case GITHUBFETCH:
      return {
        isLoading: true,
        value: action.value,
        isType: GITHUBFETCH,
        log: console.log('GITHUBFETCH RAN in REDUCER'),
      };
    case GITHUBRESPONSE:
      return {
        isLoading: false,
        value: action.value,
        isType: GITHUBRESPONSE,
        log: console.log('GITHUBRESPONSE RAN in REDUCER'),
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
  githubReducer,
};

const reducers = combineReducers(reducerObj);
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
export const history = createBrowserHistory();

const historyAndReducer = connectRouter(history)(reducers);

export default createStore(
  historyAndReducer,
  // initialState,
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
