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
