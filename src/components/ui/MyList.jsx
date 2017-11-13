/**
 * @Author: wiz
 * @Date:   11.13.2017 01:22pm
 * @Filename: MyList.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 01:26pm
 */

import React, { Component } from 'react';
import {
  List,
} from 'material-ui';
import Folder from 'material-ui/svg-icons/file/folder';
import MyListItem from './MyListItem';

class MyList extends Component {
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
      <List>
        {
          this.listItems.map(({route, primaryText}, i) => {
            return (
              <MyListItem
                key={i}
                route={route}
                primaryText={primaryText}
                clicked={this.clicked}
                leftIcon={<Folder />}
              />
            )
          })
        }
      </List>
    );
  }

}

export default MyList;
