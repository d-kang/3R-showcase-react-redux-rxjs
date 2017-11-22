/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchYoutube } from '../../actions';
import VideoPlayer from './VideoPlayer';
import Loader from '../ui/Loader';
import VideoList from './VideoList';
import TextInput from '../ui/TextInput';

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignContent: 'flex-end',
  },
};

class YoutubeSearch extends Component {
  state = {
    currentVideo: 'AQBh9soLSkI',
  }
  setCurrentVideo = (id) => {
    const { currentVideo } = this.state;
    this.setState({ currentVideo: id });
  }
  render() {
    const {
      fetchYoutubeResponse,
      isLoading,
      fetchYoutube
    } = this.props;
    return (
      <div>
        <TextInput
          fetchUserAction={fetchYoutube}
          label="Search Youtube"
        />
        <VideoPlayer currentVideo={this.state.currentVideo} />
        <div style={styles.flexContainer}>
          { isLoading
              ? <Loader />
              : <VideoList
                response={fetchYoutubeResponse}
                setCurrentVideo={this.setCurrentVideo}
              />
          }
        </div>
      </div>
    );
  }
}


const mapState = ({ fetchYoutubeReducer: reducer }) => ({
  fetchYoutubeResponse: reducer.fetchYoutubeResponse,
  isLoading: reducer.isLoading,
});


export default connect(mapState, { fetchYoutube })(YoutubeSearch);
