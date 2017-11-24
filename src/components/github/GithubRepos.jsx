/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:56pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../ui/TextInput';
import { fetchRepoAction } from '../../actions';
import Loader from '../ui/Loader';

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
  fetchAction = (val) => {
    this.props.fetchRepoAction(val);
  }
  render() {
    const {
      fetchRepoResponse,
      isLoading,
      value
    } = this.props;
    const mapped = fetchRepoResponse.map((a, i, arr) => JSON.stringify(arr[i]))

    return (
      <div>
        <TextInput fetchUserAction={this.fetchAction} />
        {isLoading ? <Loader isLoading={isLoading} /> : mapped.join('\n')}
      </div>
    );
  }
}


const mapState = state => ({
  fetchRepoResponse: state.fetchRepoReducer.fetchRepoResponse,
  isLoading: state.fetchRepoReducer.isLoading,
  value: state.fetchRepoReducer.value,
});

export default connect(mapState, { fetchRepoAction })(GithubRepos);
