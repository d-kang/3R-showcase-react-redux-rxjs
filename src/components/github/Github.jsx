/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.18.2017 10:09am
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../ui/Loader';
import GithubList from './GithubList';
import TextInput from '../ui/TextInput';
import { fetchUserAction, fetchUserCancelled } from '../../actions';

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

class SimpleAjaxRx extends Component {

  render() {
    const {
      error,
      fetchUserAction,
      value,
      fetchUserResponse,
      isLoading,
      fetchUserCancelled,
    } = this.props;
    return (
      <div>
        <div>Hi Github!</div>
        <img
          src="https://developer.github.com/assets/images/electrocat.png"
          alt="Image of Octocat"
        />
        <TextInput
          fetchUserAction={fetchUserAction}
          label="Github Usernames"
        />
        <button onClick={fetchUserCancelled}>Cancel</button>
        <Loader isLoading={isLoading} />
        {
          error ? <div>{error[0].response.message} </div>
            : <div style={styling.flexContainer}>
                <GithubList
                  fetchUserResponse={fetchUserResponse}
                />
              </div>
        }

      </div>
    );
  }
}


const mapState = state => ({
  fetchUserResponse: state.fetchUserReducer.fetchUserResponse,
  isLoading: state.fetchUserReducer.isLoading,
  value: state.fetchUserReducer.value,
  error: state.fetchUserReducer.error,
  logger: console.log('state', state),
});

export default connect(mapState, { fetchUserAction, fetchUserCancelled })(SimpleAjaxRx);
