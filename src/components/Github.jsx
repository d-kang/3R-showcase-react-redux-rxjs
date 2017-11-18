/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.18.2017 10:09am
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CircularProgress,
  MuiThemeProvider as MuiContainer,
} from 'material-ui';
import GithubList from './GithubList';
import GithubTextInput from './ui/GithubTextInput';
import LoadingIndicator from './ui/LoadingIndicator';
import { fetchUserAction, fetchUserCancelled } from '../actions';

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
        <GithubTextInput
          fetchUserAction={fetchUserAction}
        />
        <button onClick={fetchUserCancelled}>Cancel</button>
        Text input: {value}
        { isLoading &&
            <div>
              <LoadingIndicator isLoading={isLoading} />
              {/* <MuiContainer>
                <CircularProgress />
              </MuiContainer> */}
            </div>
        }
        <div style={styling.flexContainer}>
          <GithubList
            fetchUserResponse={fetchUserResponse}
          />
        </div>
      </div>
    );
  }
}


const mapState = (state) => ({
  fetchUserResponse: state.fetchUserReducer.fetchUserResponse,
  isLoading: state.fetchUserReducer.isLoading,
  value: state.fetchUserReducer.value,
});

export default connect(mapState, { fetchUserAction, fetchUserCancelled })(SimpleAjaxRx);
