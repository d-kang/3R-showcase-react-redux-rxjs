/**
 * @Author: wiz
 * @Date:   11.13.2017 03:30pm
 * @Filename: MuiContainer.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 04:28pm
 */

import React, { Component } from 'react';
import {
  MuiThemeProvider,
} from 'material-ui';

class MuiContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.comp}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default MuiContainer;
