import React, { Component } from 'react';

class Commit extends Component {
  render() {
    const { dateStamp, timeStamp, message, apiUrl } = this.props;
    return (
      <div>
        Repo Commits: {apiUrl}
        time: {`${dateStamp} ${timeStamp}`}
        message: {message}
      </div>
    )
  }
}


const Commits = ({ response }) => (
  response.map((commit, i) => (
    <Commit
      key={i}
      {...commit}
    />

  ))
);

export default Commits;
