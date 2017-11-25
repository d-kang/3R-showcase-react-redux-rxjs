import React, { Component } from 'react';

class CommitItem extends Component {
  render() {
    const { dateStamp, timeStamp, message, apiUrl, url, username, reponame } = this.props;
    return (
      url.startsWith(`https://api.github.com/repos/${username}/${reponame}`)
      &&  <div>
            <div>{message}</div>
            <div>{`${dateStamp} ${timeStamp}`}</div>
          </div>
    )
  }
}

export default CommitItem;
