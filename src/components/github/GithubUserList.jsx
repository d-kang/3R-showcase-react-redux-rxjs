import React from 'react';

class GithubUserList extends React.Component {
  render() {
    const { fetchUserResponse } = this.props;
    return (
      fetchUserResponse.map((user, i) => {
        const {
          avatar_url,
          name,
          email,
          followers,
          url,
        } = user
        return (
          <div key={i}>
            <br />
            <img src={avatar_url} alt=""/> <br />
            Name: {name} <br />
            Email: {email} <br />
            Followers: {followers} <br />
            Url: <link rel={url} href=""/>{url}<br />
          </div>
        )
      })
    );
  }
}



export default GithubUserList;
