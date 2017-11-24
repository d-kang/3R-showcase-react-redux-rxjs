/**
 * @Author: wiz
 * @Date:   11.13.2017 04:15pm
 * @Filename: GithubTextInput.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.15.2017 01:05pm
 */

import React, { Component } from 'react';
import {
  MuiThemeProvider,
  TextField,
} from 'material-ui';
import {
  orange500,
  blue500,
} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/search';

const style = {
  margin: 12,
};


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
    console.log('hiiiii')
    const { value } = this.state;
    this.props.fetchUserAction(value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <MuiThemeProvider>
          <div>
            <TextField
              border='10px'
              hintStyle={styling.errorStyle}
              onChange={this.handleChange}
              floatingLabelText={this.props.label}
              rows={1}
            />

            <RaisedButton
              icon={<ActionAndroid />}
              style={style}
              // onClick={this.handleSubmit}
            />


          </div>

        </MuiThemeProvider>
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
