import React from 'react';
import { connect } from 'react-redux';
import { listCommits } from '../../actions';
import CommitList from './CommitList';

const styling = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignContent: 'flex-end',
  },
  sample: {
    display: 'flex; display: -webkit-box',
    marginTop: '10px',
    color: 'red',
  },
  colorings: {
    color: 'yellow',
  },
};

class CommitsContainer extends React.Component {
  foo = () => {
    this.props.listCommits(this.props.apiUrl);
  }
  render() {
    const {
      apiUrl,
      response,
      listCommits,
      username,
      reponame,
      isLoading,
    } = this.props;

    return (
      <div>
        <CommitList
          apiUrl={apiUrl}
          response={response}
          username={username}
          reponame={reponame}
          isLoading={isLoading}
        />
        <button onClick={this.foo}> show commits </button>
      </div>

    );
  }
}

const mapState = ({ listCommitsReducer: reducer }) => ({
  isLoading: reducer.isLoading,
  response: reducer.response,
});

export default connect(mapState, { listCommits })(CommitsContainer);
