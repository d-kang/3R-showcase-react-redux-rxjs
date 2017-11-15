/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.14.2017 08:52pm
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
    console.log('this.props of <Github />', this.props);
    const {
      gitHubResponseAction,
      value,
      githubResponse,
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
          gitHubResponseAction={gitHubResponseAction}
        />
        Text input: {value}
        <GithubList
          githubResponse={githubResponse}
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


const gitHubResponseAction = (value) => (
  {
    type: 'FETCH_USER',
    isFetching: false,
    value,
    log: console.log('githubResponseAction Ran with value', value),
  }
);


const mapState = (state) => ({
  logMapState: console.log('mapState <Github />', state),
  githubResponse: state.fetchUserReducer.githubResponse,
  isLoading: state.fetchUserReducer.isLoading,
  value: state.fetchUserReducer.value,
  payload: state.fetchUserReducer.payload,
});

export default connect(mapState, { gitHubResponseAction })(SimpleAjaxRx);
