/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:56pm
 */

import React from 'react';
import Loader from '../ui/Loader';
import CommitsContainer from './CommitsContainer';

const GithubRepoList = ({ isLoading, fetchRepoResponse }) => (
  isLoading
    ? <Loader isLoading={isLoading} />
    : fetchRepoResponse.length > 0
    &&  <div>
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
                <CommitsContainer
                  apiUrl={repo.commits.slice(0, -6)}
                  username={repo.username}
                  reponame={repo.repo_name}
                />
              </div>
            ))
          }
      </div>
);

export default GithubRepoList;
