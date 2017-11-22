/**
 * @Author: wiz
 * @Date:   11.13.2017 04:15pm
 * @Filename: GithubTextInput.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.15.2017 01:05pm
 */

import React, { Component } from 'react';
import {
  TextField,
} from 'material-ui';
import {
  orange500,
  blue500,
} from 'material-ui/styles/colors';
import MuiContainer from './MuiContainer';

class TextInput extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.fetchUserAction(value);
  }

  textField = (
    <TextField
      hintStyle={styling.errorStyle}
      onChange={this.handleChange}
      floatingLabelText={this.props.label}
      rows={1}
    />
  )

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <MuiContainer
          component={this.textField}
        />
      </form>
    );
  }

}

const styling = {
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
};

export default TextInput;