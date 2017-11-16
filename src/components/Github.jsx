/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.15.2017 09:08pm
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
import { fetchUserAction } from '../actions';

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
        Text input: {value}
        <div style={styling.flexContainer}>
          <GithubList
            fetchUserResponse={fetchUserResponse}
          />
        </div>

        { isLoading && <LoadingIndicator isLoading={isLoading} /> }
        { isLoading &&
          <MuiContainer>
            <CircularProgress />
          </MuiContainer>
        }

      </div>
    );
  }
}


const mapState = (state) => ({
  fetchUserResponse: state.fetchUserReducer.fetchUserResponse,
  isLoading: state.fetchUserReducer.isLoading,
  value: state.fetchUserReducer.value,
});

export default connect(mapState, { fetchUserAction })(SimpleAjaxRx);
