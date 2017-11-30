/**
 * @Author: wiz
 * @Date:   11.13.2017 04:01pm
 * @Filename: GithubList.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.15.2017 01:34pm
 */
import * as React from "react";

class GithubUserList extends React.Component<any, any> {
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
