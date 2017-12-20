import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';

const style = {
  height: 'inherit',
  width: 'inherit',
  margin: 20,
  fontFamily: 'Roboto',
  // textAlign: 'center',
  // display: 'inline-block',
};

const PaperUi = ({ children, depth }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Paper
      style={style}
      zDepth={depth}
      rounded={false}
      children={children}
    />
  </MuiThemeProvider>
);

export default PaperUi;
