/**
 * @Date:   11.12.2017
 * @Filename: SimpleAjaxRx.jsx
 * @Last modified time: 11.13.2017 03:50pm
 */

import React, { Component } from 'react';
import Rx from 'rx-dom';
import {
  TextField,
} from 'material-ui';

import MuiContainer from './ui/MuiContainer';
import {orange500, blue500} from 'material-ui/styles/colors';

class SimpleAjaxRx extends Component {
  state = {
    githubResponse: [],
    value: '',
  }

  styling = {
    errorStyle: {
      color: orange500,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  textField = (
    <TextField
      // hintText=''
      hintStyle={this.styling.errorStyle}
      // value={this.state.value}
      onChange={this.handleChange}
      floatingLabelText='Github Username'
      // multiLine={true}
      rows={1}
    />
  )

  foo = (e) => {
    e.preventDefault();
    const value = this.state.value
    Rx.DOM.ajax(`https://api.github.com/users/${value}`)
      .subscribe((xhr) => {
        console.log('xhr', xhr);
        const response = JSON.parse(xhr.response);
        console.log('response', response);
        const githubResponse = [...this.state.githubResponse, response];
        this.setState({ githubResponse });
      })
  }

  render() {
    return (
      <div>
        <div>Hi Github!</div>
        <img src="https://developer.github.com/assets/images/electrocat.png" alt=""/>
        <form onSubmit={this.foo}>
          <MuiContainer comp={this.textField} />
        </form>
        Text input: {this.state.value}


        {
          this.state.githubResponse.map((user, i) => {
            return (
              <div key={i}>
                <br />
                {user.name} <br />
                {user.login} <br />
                {user.avatar_url} <br />
              </div>
            )
          })
        }
      </div>
    );
  }

}



export default SimpleAjaxRx;
