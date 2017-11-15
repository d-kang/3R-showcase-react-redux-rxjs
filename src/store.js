/**
 * @Author: wiz
 * @Date:   11.12.2017 02:28pm
 * @Filename: store.js
 * @Last modified by:
 * @Last modified time: 11.15.2017 08:22am
 */

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers.js';

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(logger, epicMiddleware, routerMiddleware(history)),
    window.devToolsExtension(),
  ),
);

if (module.hot) {
  module.hot.accept('./', () => {
    // const nextRootReducer = require('./reducers/index').default;
    // store.replaceReducer(nextRootReducer);
    store.replaceReducer(rootReducer);
  });
}


export default store;


// export default createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(logger, epicMiddleware),
//     window.devToolsExtension(),
//   ),
// );
