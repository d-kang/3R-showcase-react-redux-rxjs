import React from 'react';
import {
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
    const {
      route,
      clicked,
      primaryText,
      leftIcon,
    } = this.props
    return (
      <Link to={route}>
        <ListItem
          primaryText={primaryText}
          leftIcon={leftIcon}
        />
      </Link>
    )
  }
}

export default MyListItem;
