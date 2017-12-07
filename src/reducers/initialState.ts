import youTubeSampleData from '../data/data2';

interface InitialStateMap {
  ping: {
    isPinging: boolean,
  },
  beep: {
    isBeeping: boolean,
    someArr: number[],
  },
  githubUser: {
    isLoading: boolean,
    value: string,
    fetchUserResponse: object[],
    error: boolean,
  },
  githubRepos: {
    isLoading: boolean,
    value: string,
    fetchRepoResponse: object[],
  },
  listCommits: {
    isLoading: boolean,
    value: string,
    response: object[],
  },
  youtube: {
    isLoading: boolean,
    value: string,
    fetchYoutubeResponse: object[],
  },
};

export const initialState: InitialStateMap = {
  ping: {
    isPinging: false,
  },
  beep: {
    isBeeping: false,
    someArr: [1, 2, 3, 4, 5],
  },
  githubUser: {
    isLoading: false,
    value: '',
    fetchUserResponse: [],
    error: false,
  },
  githubRepos: {
    isLoading: false,
    value: '',
    fetchRepoResponse: [],
  },
  listCommits: {
    isLoading: false,
    value: '',
    response: [],
  },
  youtube: {
    isLoading: false,
    value: '',
    fetchYoutubeResponse: [...youTubeSampleData.items],
  },
};



// export default initialState;

// export const initialState = {
//   ping: {
//     isPinging: false,
//   },
//   beep: {
//     isBeeping: false,
//     someArr: [1, 2, 3, 4, 5],
//   },
//   githubUser: {
//     isLoading: false,
//     value: '',
//     fetchUserResponse: [],
//     error: false,
//   },
//   githubRepos: {
//     isLoading: false,
//     value: '',
//     fetchRepoResponse: [],
//   },
//   listCommits: {
//     isLoading: false,
//     value: '',
//     response: [],
//   },
//   youtube: {
//     isLoading: false,
//     value: '',
//     fetchYoutubeResponse: [...youTubeSampleData.items],
//   },
// };
