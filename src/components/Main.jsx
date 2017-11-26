/**
 * @Date:   11.11.2017
 * @Filename: Main.jsx
 * @Last modified time: 11.18.2017 10:04am
 */

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import PingObservable from './ping/PingObservable';
import BeepObservable from './ping/BeepObservable';
import GithubUserContainer from './github/GithubUserContainer';
import GithubRepoList from './github/GithubRepoList';
import MyDrawer from './ui/MyDrawer';
import YoutubeSearch from './youtube/YoutubeSearch';

const Main = () => (
  <div>
    <MyDrawer />
    <hr />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path="/pinging" component={PingObservable} />
      <Route exact path="/beeping" component={BeepObservable} />
      <Route exact path="/github" component={GithubUserContainer} />
      <Route exact path="/repos" component={GithubRepoList} />
      <Route exact path="/youtube" component={YoutubeSearch} />
    </Switch>
  </div>
);
export default Main;
