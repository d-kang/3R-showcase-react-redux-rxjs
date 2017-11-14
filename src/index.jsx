/**
 * @Date:   11.12.2017 01:47pm
 * @Filename: index.jsx
 * @Last modified time: 11.13.2017 07:47pm
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as Container } from 'react-hot-loader';
import {
  Router,
  Route,
} from 'react-router-dom';
import 'rxjs';

import store, { history } from './store';
import ConnectedApp from './components/App';

import { ConnectedRouter } from 'connected-react-router';

const rootElement = document.getElementById('root');
export default history;


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container>
        <Route exact path='/' component={ConnectedApp} />
      </Container>
    </ConnectedRouter>
  </Provider>,
  rootElement,
);


// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     const NextApp = require('./components/App').default;
//     render(
//       <Provider store={store}>
//         <ConnectedRouter history={history}>
//           <Container>
//             <Router history={history}>
//               <Route exact path='/' component={NextApp} />
//               {/* <NextApp /> */}
//             </Router>
//           </Container>
//         </ConnectedRouter>
//       </Provider>,
//       rootElement,
//     );
//   });
// }
