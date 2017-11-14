/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.13.2017 07:37pm
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
  // state = {
  //   githubResponse: [],
  //   isLoading: false,
  // }
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
    // import { ajax } from 'rxjs/observable/dom/ajax';
    //
    // console.log('ajax', ajax);
    // ajax.getJSON(`https://api.github.com/users/d-kang`)
    //   .subscribe(res => console.log('res', res));
  }

  render() {
    console.log('this.props of <Github />', this.props);
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
        Text input: {this.props.value}
        <GithubList
          githubResponse={this.props.githubResponse}
        />
        {
          this.props.isLoading
            && <LoadingIndicator
                 isLoading={this.props.isLoading}
               />
        }
        {
          this.props.isLoading &&
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
    type: 'GITHUBFETCH',
    isFetching: false,
    value,
    log: console.log('githubResponseAction Ran with value', value),
  }
);


const mapState = (state) => ({
  logMapState: console.log('mapState <Github />', state),
  githubResponse: state.githubReducer.githubResponse,
});

export default connect(mapState, { gitHubResponseAction })(SimpleAjaxRx);
