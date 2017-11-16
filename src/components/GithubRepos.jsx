/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:21pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRepoAction } from '../actions';

import {
  CircularProgress,
  MuiThemeProvider as MuiContainer,
} from 'material-ui';

const styling = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignContent: 'flex-end',
  },
  sample: {
    display: 'flex; display: -webkit-box',
    marginTop: '10px',
    color: 'red',
  },
  colorings: {
    color: 'yellow',
  },
};

class GithubRepos extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchRepoAction('octocat');
  }
  render() {
    const {
      fetchRepoResponse,
      isLoading,
      value
    } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <button>Click</button>
        </form>
      </div>
    );
  }
}


const mapState = (state) => ({
  fetchRepoResponse: state.fetchRepoReducer.fetchRepoResponse,
  isLoading: state.fetchRepoReducer.isLoading,
  value: state.fetchRepoReducer.value,
});

export default connect(mapState, { fetchRepoAction })(GithubRepos);
