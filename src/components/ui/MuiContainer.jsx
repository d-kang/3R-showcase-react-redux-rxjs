/**
 * @Author: wiz
 * @Date:   11.13.2017 03:30pm
 * @Filename: MuiContainer.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 04:48pm
 */

import React, { Component } from 'react';
import {
  MuiThemeProvider,
} from 'material-ui';

class MuiContainer extends React.Component {
  // console.log('this.props.comp', this.props.comp);
  // const MyComponent = this.props.comp
  render() {
    return (
      <MuiThemeProvider>
        {this.props.component}
      </MuiThemeProvider>
    )
  }
}

export default MuiContainer;
