import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { CircularProgress } from 'material-ui';

export default ({ isLoading }) => (
  isLoading &&
  <MuiThemeProvider>
    <CircularProgress
      thickness={5}
    />
  </MuiThemeProvider>
);
