import React from 'react';
import { CircularProgress, MuiThemeProvider } from 'material-ui';

export default ({ isLoading }) => (
  isLoading &&
  <MuiThemeProvider>
    <CircularProgress
      thickness={5}
    />
  </MuiThemeProvider>
);
