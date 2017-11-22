/**
 * @Date:   11.12.2017 01:47pm
 * @Filename: index.jsx
 * @Last modified time: 11.15.2017 08:01pm
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import {
  Router,
  Route,
} from 'react-router-dom';
import 'rxjs';

import store, { history } from './store';
import Main from './components/Main';

import { ConnectedRouter } from 'connected-react-router';

const rootElement = document.getElementById('root');
export default history;


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <AppContainer> */}
      <Main />
      {/* </AppContainer> */}
    </ConnectedRouter>
  </Provider>,
  rootElement,
);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {/* <AppContainer> */}
            <Router history={history}>
              <Route exact path='/' component={NextApp} />
              {/* <NextApp /> */}
            </Router>
          {/* </AppContainer> */}
        </ConnectedRouter>
      </Provider>,
      rootElement,
    );
  });
}
