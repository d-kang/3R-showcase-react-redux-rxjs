import * as React from "react";
import CommitsContainer from './CommitsContainer';

class GithubRepo extends React.Component<any, any> {

  render() {
    const { repo } = this.props;
    return (
      <div>
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
    );
  }
}

export default GithubRepo;
