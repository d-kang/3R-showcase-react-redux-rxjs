import * as types from '../actions/actionTypes';
import initialState from './initialState';


export const fetchUserReducer = (state = initialState.githubUser, action: any) => {
  switch (action.type) {
    case types.FETCH_USER:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.FETCH_USER_CANCELLED:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case types.FETCH_USER_FULFILLED:
      return {
        ...state,
        fetchUserResponse: [action.payload, ...state.fetchUserResponse],
        isLoading: false,
        error: false,
      };
    case types.FETCH_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: [action.payload],
      };
    default:
      return state;
  }
};

export const fetchRepoReducer = (state = initialState.githubRepos, action: any) => {
  switch (action.type) {
    case types.FETCH_REPO:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_REPO_FULFILLED:
      return {
        ...state,
        fetchRepoResponse: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};


export const listCommitsReducer = (state = initialState.listCommits, action: object) => {
  switch (action.type) {
    case types.LIST_COMMITS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.LIST_COMMITS_FULLFILLED:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        error: false,
      };
    // case types.FETCH_USER_CANCELLED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: false,
    //   };
    // case types.FETCH_REJECTED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: [action.payload],
    //   };
    default:
      return state;
  }
};
