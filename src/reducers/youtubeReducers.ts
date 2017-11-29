import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const fetchYoutubeReducer = (state = initialState.youtube, action: object) => {
  switch (action.type) {
    case types.FETCH_YOUTUBE:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_YOUTUBE_FULFILLED:
      return {
        ...state,
        fetchYoutubeResponse: [...action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};
