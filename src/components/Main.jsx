/**
 * @Date:   11.11.2017
 * @Filename: Main.jsx
 * @Last modified time: 11.13.2017 02:03pm
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import PingObservable from './PingObservable';
import BeepObservable from './BeepObservable';
import Github from './Github';
import MyDrawer from './ui/MyDrawer';
const Main = () => (
  <Router>
    <div>
      <MyDrawer />
      <hr />
      <Route exact path="/pinging" component={PingObservable} />
      <Route exact path="/beeping" component={BeepObservable} />
      <Route exact path="/github" component={Github} />
    </div>
  </Router>
);
export default Main;
