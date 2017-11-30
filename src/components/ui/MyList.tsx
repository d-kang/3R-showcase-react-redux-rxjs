/**
 * @Date:   11.13.2017 01:22pm
 * @Filename: MyList.jsx
 * @Last modified time: 11.18.2017 10:03am
 */

import * as React from "react";
import {
  List,
} from 'material-ui';
import Folder from 'material-ui/svg-icons/file/folder';
import MyListItem from './MyListItem';



class MyList extends React.Component<any, any> {
  listItems = [
    {
      route: '/pinging',
      primaryText: 'Ping Pong',
    },
    {
      route: '/beeping',
      primaryText: 'Beep Boop',
    },
    {
      route: '/github',
      primaryText: 'Github User',
    },
    {
      route: '/repos',
      primaryText: 'Github Repos',
    },
    {
      route: '/youtube',
      primaryText: 'Youtube Search',
    },
  ]

  render() {
    return (
      <List>
        {
          this.listItems.map(({route, primaryText} : { route: any, primaryText: any}, i) => {
            return (
              <MyListItem
                key={i}
                route={route}
                primaryText={primaryText}
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
