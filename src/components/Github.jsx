/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.15.2017 01:06pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rx from 'rx-dom';
import {
  CircularProgress,
  MuiThemeProvider as MuiContainer,
} from 'material-ui';
import GithubList from './GithubList';
import GithubTextInput from './ui/GithubTextInput';
import LoadingIndicator from './ui/LoadingIndicator';

class SimpleAjaxRx extends Component {
  // getGithubResponse = (value) => {
  //   this.setState({ isLoading: true });
  //   Rx.DOM.ajax(`https://api.github.com/users/${value}`)
  //     .subscribe((xhr) => {
  //       console.log('xhr', xhr);
  //       const response = JSON.parse(xhr.response);
  //       console.log('response', response);
  //       const githubResponse = [...this.state.githubResponse, response];
  //       this.setState({ githubResponse }, () => {
  //         this.setState({ isLoading: false });
  //       });
  //     });
  // }

  render() {
    const {
      fetchUserAction,
      value,
      fetchUserResponse,
      isLoading,
    } = this.props;
    console.log('fetchUserResponse', fetchUserResponse);
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
        <GithubList
          fetchUserResponse={fetchUserResponse}
        />
        {
          isLoading
            && <LoadingIndicator
                 isLoading={isLoading}
               />
        }
        {
          isLoading &&
            <MuiContainer>
              <CircularProgress />
            </MuiContainer>
        }

      </div>
    );
  }
}


const fetchUserAction = (value) => (
  {
    type: 'FETCH_USER',
    isFetching: false,
    value,
  }
);


const mapState = (state) => ({
  fetchUserResponse: state.fetchUserReducer.fetchUserResponse,
  isLoading: state.fetchUserReducer.isLoading,
  value: state.fetchUserReducer.value,
});

export default connect(mapState, { fetchUserAction })(SimpleAjaxRx);
