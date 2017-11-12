/**
 * @Date:   11.12.17
 * @Filename: MyDrawer.jsx
 * @Last modified time: 11.12.2017 12:58pm
 */

import React from 'react';
import {
  MuiThemeProvider,
  Drawer,
  AppBar,
  RaisedButton,
  List,
  ListItem,
  Divider,
} from 'material-ui';
import Folder from 'material-ui/svg-icons/file/folder';
import { Link } from 'react-router-dom';

import m from 'material-ui';
console.log('m', m);

export default class MyDrawer extends React.Component {
  state = {
    open: true,
  };
  handleToggle = () => this.setState({ open: !this.state.open });

  clicked = () => {
    console.log('clicked');
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton
            label="Toggle Drawer"
            onClick={this.handleToggle}
          />
          <Drawer width={200} openSecondary={true} open={this.state.open} >
            <AppBar title="AppBar" />
            <RaisedButton
              label="Toggle Drawer"
              onClick={this.handleToggle}
            />
            <List>
            <Link to='/pinging'>
              <ListItem
                onClick={this.clicked}
                primaryText="PingPong"
                leftIcon={<Folder />}
              />
            </Link>
            <Link to='/beeping'>
              <ListItem
                onClick={this.clicked}
                primaryText="BeepBoop"
                leftIcon={<Folder />}
              />
            </Link>
            </List>
            <Divider />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
