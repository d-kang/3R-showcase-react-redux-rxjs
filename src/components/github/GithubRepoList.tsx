/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:56pm
 */

import React from 'react';
import Loader from '../ui/Loader';
import GithubRepo from './GithubRepo';

const GithubRepoList = ({ isLoading, fetchRepoResponse }) => (
  isLoading
    ? <Loader isLoading={isLoading} />
    : fetchRepoResponse.length > 0
    &&  <div>
          <div><img src={fetchRepoResponse[0].avatar + '&s=88'} alt=""/></div>
          <div>Username: {fetchRepoResponse[0].username}</div>
          {
            fetchRepoResponse.map((repo, i) => (
              <GithubRepo
                key={i}
                repo={repo}
              />
            ))
          }

      </div>
);

export default GithubRepoList;
