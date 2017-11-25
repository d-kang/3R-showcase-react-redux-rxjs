/**
 * @Date:   11.15.2017 08:17am
 * @Filename: reducers.js
 * @Last modified time: 11.18.2017 10:09am
 */

import { combineReducers } from 'redux';
import { pingReducer, beepReducer } from './pingReducers';
import { fetchUserReducer, fetchRepoReducer, listCommitsReducer } from './githubReducers';
import { fetchYoutubeReducer } from './youtubeReducers';

const reducerObj = {
  pingReducer,
  beepReducer,
  fetchUserReducer,
  fetchRepoReducer,
  fetchYoutubeReducer,
  listCommitsReducer,
};

const rootReducer = combineReducers(reducerObj);

export default rootReducer;
