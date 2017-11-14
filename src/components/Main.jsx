/**
 * @Date:   11.11.2017
 * @Filename: Main.jsx
 * @Last modified time: 11.14.2017 08:49am
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
      <Switch>
        <Route exact path="/pinging" component={PingObservable} />
        <Route exact path="/beeping" component={BeepObservable} />
        <Route exact path="/github" component={Github} />
      </Switch>
    </div>
  </Router>
);
export default Main;
