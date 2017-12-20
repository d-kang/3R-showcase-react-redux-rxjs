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
