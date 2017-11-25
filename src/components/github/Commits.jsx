import React, { Component } from 'react';

class Commit extends Component {
  render() {
    const { dateStamp, timeStamp, message, apiUrl, url, username, reponame } = this.props;
    return (
      url.startsWith(`https://api.github.com/repos/${username}/${reponame}`)
      &&  <div>
            Repo Commits: {apiUrl}
            time: {`${dateStamp} ${timeStamp}`}
            message: {message}
          </div>
    )
  }
}


const Commits = ({ response, apiUrl, username, reponame }) => (
  response.map((commit, i) => (
    <Commit
      key={i}
      {...commit}
      apiUrl={apiUrl}
      username={username}
      reponame={reponame}
    />

  ))
);

export default Commits;
