/**
 * @Author: wiz
 * @Date:   11.13.2017 04:01pm
 * @Filename: GithubList.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 04:01pm
 */
import React, { Component } from 'react';

class GithubList extends Component {

  render() {
    const { githubResponse } = this.props;
    return (
      githubResponse.map((user, i) => {
        return (
          <div key={i}>
            <br />
            {user.name} <br />
            {user.login} <br />
            {user.avatar_url} <br />
          </div>
        )
      })
    );
  }

}

export default GithubList;
