import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
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


class TextInput extends React.Component {
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
    const { fetchUserAction  } = this.props;
    fetchUserAction(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <MuiThemeProvider >
          <div>
            <TextField
              hintStyle={styling.errorStyle}
              onChange={this.handleChange}
              floatingLabelText={this.props.label}
              rows={1}
              value={this.state.value}
            />

            <RaisedButton
              icon={<ActionAndroid />}
              style={style}
              onClick={this.handleSubmit}
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
