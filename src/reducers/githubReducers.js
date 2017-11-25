import * as types from '../actions/actionTypes';
import initialState from './initialState';


export const fetchUserReducer = (state = initialState.githubUser, action) => {
  console.log('action', action)
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

export const fetchRepoReducer = (state = initialState.githubRepos, action) => {
  switch (action.type) {
    case types.FETCH_REPO:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_REPO_FULFILLED:
      return {
        ...state,
        fetchRepoResponse: [action.payload, ...state.fetchRepoResponse],
        isLoading: false,
      };
    default:
      return state;
  }
};

// export const fetchRejectedReducer = (state = initialState.githubUser, action) => {
//   switch (action.type) {
//     case types.FETCH_REJECTED:
//       return {
//         ...state,
//         isLoading: false,
//         error: [action.payload],
//       };
//     default:
//       return state;
//   }
// };
