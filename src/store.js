import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';

import { createEpicMiddleware } from 'redux-observable';
// import { switchMap } from 'rxjs/operator/switchMap';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';


const PING = 'PING';
const PONG = 'PONG';

const pingEpic = action$ => (
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG })
);

const epicMiddleware = createEpicMiddleware(pingEpic);


const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

const reducers = combineReducers({
  pingReducer,
});


export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, epicMiddleware),
    window.devToolsExtension(),
  ),
);
