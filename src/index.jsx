import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
} from 'react-router-dom';
import 'rxjs';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import Main from './components/Main';


const rootElement = document.getElementById('root');
export default history;


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  rootElement,
);


if (module.hot) {
  module.hot.accept('./components/Main', () => {
    const NextApp = require('./components/Main').default;
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <NextApp />
        </ConnectedRouter>
      </Provider>,
      rootElement,
    );
  });
}
