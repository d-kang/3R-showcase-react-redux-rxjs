/**
 * @Author: wiz
 * @Date:   11.12.2017 02:28pm
 * @Filename: store.js
 * @Last modified by:   wiz
 * @Last modified time: 11.18.2017 10:10am
 */

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import epicMiddleware from '../epics';

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(logger, epicMiddleware, routerMiddleware(history)),
    window.devToolsExtension(),
  ),
);


// if (module.hot.active) {
//   console.log('module.hot is true')
//   module.hot.accept('../reducers/', (...rest) => {
//     console.log('rest', rest);
//     console.log('hiiiiiiiiiiiii')
//     const nextRootReducer = require('../reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }


if (module.hot) {
  module.hot.accept('../reducers', (...args) => {
    store.replaceReducer(require('../reducers/index').default)
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
