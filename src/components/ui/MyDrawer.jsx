import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  Drawer,
  AppBar,
  RaisedButton,
  List,
  Divider,
} from 'material-ui';
import MyList from './MyList';

class MyDrawer extends React.Component {
  state = {
    open: true,
  };
  handleToggle = () => this.setState({ open: !this.state.open });

  clicked = () => {
    console.log('clicked');
  }

  styling = {
    raised: {
      float: 'right',
      marginTop: '25px',
    },
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton
            style={this.styling.raised}
            label="Toggle Drawer"
            onClick={this.handleToggle}
          />
          <Drawer width={200} openSecondary={true} open={this.state.open}>
            <AppBar title="AppBar" />
            <RaisedButton
              label="Untoggle Drawer"
              onClick={this.handleToggle}
            />
            <MyList />
            <Divider />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}



export default MyDrawer;
