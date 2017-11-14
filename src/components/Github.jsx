/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.13.2017 04:55pm
 */

import React, { Component } from 'react';
import Rx from 'rx-dom';
import {
  CircularProgress,
  MuiThemeProvider as MuiContainer,
} from 'material-ui';
import GithubList from './GithubList';
import GithubTextInput from './ui/GithubTextInput';
import LoadingIndicator from './ui/LoadingIndicator';

class SimpleAjaxRx extends Component {
  state = {
    githubResponse: [],
    isLoading: false,
  }
  getGithubResponse = (value) => {
    this.setState({ isLoading: true });
    Rx.DOM.ajax(`https://api.github.com/users/${value}`)
      .subscribe((xhr) => {
        console.log('xhr', xhr);
        const response = JSON.parse(xhr.response);
        console.log('response', response);
        const githubResponse = [...this.state.githubResponse, response];
        this.setState({ githubResponse }, () => {
          this.setState({ isLoading: false });
        });
      });
  }

  render() {
    return (
      <div>
        <div>Hi Github!</div>
        <img
          src="https://developer.github.com/assets/images/electrocat.png"
          alt="Image of Octocat"
        />
        <GithubTextInput
          getGithubResponse={this.getGithubResponse}
        />
        Text input: {this.state.value}
        <GithubList
          githubResponse={this.state.githubResponse}
        />
        {
          this.state.isLoading
            && <LoadingIndicator
                 isLoading={this.state.isLoading}
               />
        }
        {
          this.state.isLoading &&
            <MuiContainer>
              <CircularProgress />
            </MuiContainer>
        }

      </div>
    );
  }
}



export default SimpleAjaxRx;
