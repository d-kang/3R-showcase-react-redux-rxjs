/**
 * @Date:   11.12.2017
 * @Filename: SimpleAjaxRx.jsx
 * @Last modified time: 11.13.2017 03:33pm
 */

import React, { Component } from 'react';
import Rx from 'rx-dom';
import {
  TextField,
} from 'material-ui';

import MuiContainer from './ui/MuiContainer';


class SimpleAjaxRx extends Component {
  state = {
    githubResponse: [],
    value: 'Property Value',
  }
  componentDidMount() {
    console.log('Rx.DOM', Rx.DOM);
    Rx.DOM.ajax('https://api.github.com/users/d-kang')
      .subscribe((xhr) => {
        console.log('xhr', xhr);
        const response = JSON.parse(xhr.response);
        console.log('response', response);
        const githubResponse = [...this.state.githubResponse, response];
        this.setState({ githubResponse });
      })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  textField = (
    <TextField
      id="text-field-controlled"
      value={this.state.value}
      onChange={this.handleChange}
    />
  )

  render() {
    return (
      <div>
        <div>Hi Github!</div>
        <img src="https://developer.github.com/assets/images/electrocat.png" alt=""/>
        <MuiContainer comp={this.textField} />



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