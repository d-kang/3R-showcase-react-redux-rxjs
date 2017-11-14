/**
 * @Date:   11.12.2017
 * @Filename: SimpleAjaxRx.jsx
 * @Last modified time: 11.13.2017 04:24pm
 */

import React, { Component } from 'react';
import Rx from 'rx-dom';

import GithubList from './GithubList';
import TextInput from './ui/TextInput';

class SimpleAjaxRx extends Component {
  state = {
    githubResponse: [],
  }
  getGithubResponse = (value) => {
    Rx.DOM.ajax(`https://api.github.com/users/${value}`)
      .subscribe((xhr) => {
        console.log('xhr', xhr);
        const response = JSON.parse(xhr.response);
        console.log('response', response);
        const githubResponse = [...this.state.githubResponse, response];
        this.setState({ githubResponse });
      });
  }

  render() {
    return (
      <div>
        <div>Hi Github!</div>
        <img src="https://developer.github.com/assets/images/electrocat.png" alt=""/>

        <TextInput
          getGithubResponse={this.getGithubResponse}
        />
        Text input: {this.state.value}
        <GithubList
          githubResponse={this.state.githubResponse}
        />
      </div>
    );
  }

}



export default SimpleAjaxRx;
