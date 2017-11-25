/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:56pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../ui/Loader';
import { listCommits } from '../../actions';
import CommitList from './CommitList';

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

class CommitsContainer extends Component {
  foo = () => {
    this.props.listCommits(this.props.apiUrl);
  }
  render() {
    const {
      apiUrl,
      response,
      listCommits,
      username,
      reponame,
    } = this.props;

    return (
      <div>
        <CommitList
          apiUrl={apiUrl}
          response={response}
          username={username}
          reponame={reponame}
        />
        <button onClick={this.foo}> show commits </button>
      </div>

    );
  }
}

const mapState = ({ listCommitsReducer: reducer }) => ({
  isLoading: reducer.isLoading,
  response: reducer.response,
});

export default connect(mapState, { listCommits })(CommitsContainer);
