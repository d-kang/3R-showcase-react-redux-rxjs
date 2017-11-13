/**
 * @Author: wiz
 * @Date:   11.13.2017 03:30pm
 * @Filename: MuiContainer.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 03:33pm
 */

import React, { Component } from 'react';
import {
  MuiThemeProvider,
} from 'material-ui';

class MuiContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        {this.props.comp}
      </MuiThemeProvider>
    )
  }
}

export default MuiContainer;
