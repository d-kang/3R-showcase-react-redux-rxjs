/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:56pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../ui/TextInput';
import { fetchRepoAction } from '../../actions';
import GithubRepoList from './GithubRepoList';

class GithubRepoContainer extends Component {
  fetchAction = (val) => {
    this.props.fetchRepoAction(val);
  }
  render() {
    const {
      fetchRepoResponse,
      isLoading,
      value
    } = this.props;
    return (
      <div>
        <TextInput
          fetchUserAction={this.fetchAction}
          label="Github Repos"
        />
        <GithubRepoList
          fetchRepoResponse={fetchRepoResponse}
          isLoading={isLoading}
        />
      </div>
    );
  }
}


const mapState = state => ({
  fetchRepoResponse: state.fetchRepoReducer.fetchRepoResponse,
  isLoading: state.fetchRepoReducer.isLoading,
  value: state.fetchRepoReducer.value,
});

export default connect(mapState, { fetchRepoAction })(GithubRepoContainer);
