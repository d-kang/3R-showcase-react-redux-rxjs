import React from 'react';
import CommitItem from './CommitItem';

const CommitList = ({ response, apiUrl, username, reponame, isLoading }) => (
  response.map((commit, i) => (
    <CommitItem
      key={i}
      {...commit}
      apiUrl={apiUrl}
      username={username}
      reponame={reponame}
      isLoading={isLoading}
    />
  ))
);

export default CommitList;
