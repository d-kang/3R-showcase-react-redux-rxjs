/**
 * @Date:   11.11.2017
 * @Filename: Main.jsx
 * @Last modified time: 11.12.2017 12:58pm
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import PingObservable from './PingObservable';
import BeepObservable from './BeepObservable';
import MyDrawer from './MyDrawer';
const Main = () => (
  <Router>
    <div>
      <MyDrawer />
      <Route exact path="/pinging" component={PingObservable} />
      <Route exact path="/beeping" component={BeepObservable} />
      <hr />
    </div>
  </Router>
);
export default Main;
