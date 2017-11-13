/**
 * @Date:   11.12.17
 * @Filename: MyDrawer.jsx
 * @Last modified time: 11.13.2017 12:55pm
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


class MyListItem extends React.Component {
  render() {
    const {route, clicked, primaryText, leftIcon} = this.props
    return (
      <Link to={route}>
        <ListItem
          onClick={clicked}
          primaryText={primaryText}
          leftIcon={leftIcon}
        />
      </Link>
    )
  }
}

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
          <Drawer width={200} openSecondary={true} open={this.state.open}>
            <AppBar title="AppBar" />
            <RaisedButton
              label="Toggle Drawer"
              onClick={this.handleToggle}
            />
            <List>
              <MyListItem
                route='/pinging'
                clicked={this.clicked}
                primaryText='PingPong'
                leftIcon={<Folder />}
              />
              <MyListItem
                route='/beeping'
                onClick={this.clicked}
                primaryText="BeepBoop"
                leftIcon={<Folder />}
              />
            </List>
            <Divider />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
