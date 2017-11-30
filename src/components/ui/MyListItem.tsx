/**
 * @Date:   11.13.2017 12:59pm
 * @Filename: MyListItem.jsx
 * @Last modified time: 11.13.2017 01:00pm
 */


import * as React from "react";
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

interface PropTypes {
  route: any,
  primaryText: any,
  leftIcon: any,
}

class MyListItem extends React.Component<any, any> {
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
