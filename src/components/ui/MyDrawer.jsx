/**
 * @Date:   11.12.17
 * @Filename: MyDrawer.jsx
 * @Last modified time: 11.13.2017 01:24pm
 */

import React from 'react';
import {
  MuiThemeProvider,
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

  listItems = [
    {
      route: '/pinging',
      primaryText: 'PingPong',
    },
    {
      route: '/beeping',
      primaryText: 'BeepBoop',
    },
  ]

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton
            style={
              {
                float: 'right',
                marginTop: '25px',
              }
            }
            label="Toggle Drawer"
            onClick={this.handleToggle}
          />
          <Drawer width={200} openSecondary={true} open={this.state.open}>
            <AppBar title="AppBar" />
            <RaisedButton
              label="Untoggle Drawer"
              onClick={this.handleToggle}
            />
            <MyList listItems={this.listItems}/>
            <Divider />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MyDrawer;
