import youTubeSampleData from '../data/data2';
console.log('youTubeSampleData', youTubeSampleData);

export interface initialState {
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
    fetchUserResponse: any[],
    error: false,
  },
  githubRepos: {
    isLoading: false,
    value: '',
    fetchRepoResponse: any[],
  },
  listCommits: {
    isLoading: false,
    value: '',
    response: any[],
  },
  youtube: {
    isLoading: false,
    value: '',
    fetchYoutubeResponse: any[...youTubeSampleData.items],
  },
};

// export default initialState;
