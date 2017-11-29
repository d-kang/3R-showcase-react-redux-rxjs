/**
 * @Date:   11.13.2017 12:59pm
 * @Filename: MyListItem.jsx
 * @Last modified time: 11.13.2017 01:00pm
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

export default MyListItem;
