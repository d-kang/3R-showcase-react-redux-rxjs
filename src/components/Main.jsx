/**
 * @Date:   11.11.2017
 * @Filename: Main.jsx
 * @Last modified time: 11.15.2017 07:42pm
 */

import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import PingObservable from './PingObservable';
import BeepObservable from './BeepObservable';
import Github from './Github';
import MyDrawer from './ui/MyDrawer';
const Main = () => (

  <div>
    <MyDrawer />
    <hr />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path="/pinging" component={PingObservable} />
      <Route exact path="/beeping" component={BeepObservable} />
      <Route exact path="/github" component={Github} />
    </Switch>
  </div>

);
export default Main;
