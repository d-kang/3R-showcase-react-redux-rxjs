import youTubeSampleData from '../data/data.json';

const initialState = {
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
  youtube: {
    isLoading: false,
    value: '',
    fetchYoutubeResponse: [...youTubeSampleData.items],
  },
};

export default initialState;
