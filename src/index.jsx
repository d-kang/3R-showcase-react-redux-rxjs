/**
 * @Date:   11.12.2017 01:47pm
 * @Filename: index.jsx
 * @Last modified time: 11.15.2017 07:41pm
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import 'rxjs';

import store, { history } from './store';
import Main from './components/Main';
import Github from './components/Github';

import { ConnectedRouter } from 'connected-react-router';

const rootElement = document.getElementById('root');
export default history;


render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  rootElement,
);





// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// const rootElement = document.getElementById('root');
//
//
// const App = () => (
//   <div>Hello React !</div>
// )
//
// const Root = () => (
//   <BrowserRouter>
//     <Route exact path='/' component={App} />
//   </BrowserRouter>
// )
//
// render(<Root />, rootElement);
