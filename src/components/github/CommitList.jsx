import React, { Component } from 'react';
import PaperUi from '../ui/Paper';
import CommitItem from './CommitItem';

const CommitList = ({ response, apiUrl, username, reponame }) => (
  response.map((commit, i) => (
    <PaperUi
      key={i}
      depth={2}
      children={
        <CommitItem
          {...commit}
          apiUrl={apiUrl}
          username={username}
          reponame={reponame}
        />
      }
    />
  ))
);

export default CommitList;
