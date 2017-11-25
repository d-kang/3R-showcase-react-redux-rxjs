/**
 * @Date:   11.12.2017
 * @Filename: Github.jsx
 * @Last modified time: 11.16.2017 02:56pm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../ui/Loader';

const styling = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignContent: 'flex-end',
  },
  sample: {
    display: 'flex; display: -webkit-box',
    marginTop: '10px',
    color: 'red',
  },
  colorings: {
    color: 'yellow',
  },
};

class ListRepos extends Component {

  render() {
    const { api_url } = this.props;
    return (
      <div>Repo Commits: {api_url.slice(0, -6)}</div>
    );
  }
}


const mapState = () => ({
});
// const mapState = ({someReducer: reducer}) => ({
//   isLoading: someReducer.isLoading,
//   value: someReducer.value,
//   payload: someReducer.payload,
// });

const listRepos = (api_url) => ({
  type: 'LIST_REPOS',
  api_url,
})

export default connect(mapState, { listRepos })(ListRepos);
