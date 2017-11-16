/**
 * @Author: wiz
 * @Date:   11.12.2017 02:28pm
 * @Filename: store.js
 * @Last modified by:   wiz
 * @Last modified time: 11.15.2017 09:07pm
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
import epicMiddleware from '../epics'
export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(logger, epicMiddleware, routerMiddleware(history)),
    window.devToolsExtension(),
  ),
);

console.log('module', module);
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(nextRootReducer);
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
