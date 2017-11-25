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
import ListCommits from './ListCommits';

const styling = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignContent: 'flex-end',
    fontFamily: 'Roboto',
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
    return (
      <div>
        <TextInput
          fetchUserAction={this.fetchAction}
          label="Github Repos"
        />
        {
          isLoading
            ? <Loader isLoading={isLoading} />
            : fetchRepoResponse.length > 0
            && <div>
                <div><img src={fetchRepoResponse[0].avatar + '&s=88'} alt=""/></div>
                <div>Username: {fetchRepoResponse[0].username}</div>
                {
                  fetchRepoResponse.map((repo, i) => (
                    <div key={i}>
                      <hr/>
                      <div>Repo Name: {repo.repo_name}</div>
                      <div>Repo URL: {repo.repo_url}</div>
                      {
                        repo.description
                          && <div>Repo Description: {repo.description}</div>
                      }
                      <ListCommits
                        apiUrl={repo.commits.slice(0, -6)}
                        username={repo.username}
                        reponame={repo.repo_name}
                      />
                    </div>
                  ))
                }
              </div>

        }
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
