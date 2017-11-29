import * as React from "react";
import { MuiThemeProvider, Paper } from 'material-ui';

const style = {
  height: 'inherit',
  width: 'inherit',
  margin: 20,
  fontFamily: 'Roboto',
  // textAlign: 'center',
  // display: 'inline-block',
};

const PaperUi = ({ children, depth }) => (
  <MuiThemeProvider>
    <Paper
      style={style}
      zDepth={depth}
      rounded={false}
      children={children}
    />
  </MuiThemeProvider>
);

export default PaperUi;
