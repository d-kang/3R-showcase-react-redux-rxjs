/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */

import * as React from "react";
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

class YoutubeSearch extends React.Component {
  state = {
    currentVideo: 'AQBh9soLSkI',
    currentKey: null,
  }
  setCurrentVideo = (currentVideo, currentKey) => {
    // setTimeout(() =>   this.setState({ currentVideo, currentKey }), 10000)
    this.setState({ currentVideo, currentKey });
  }
  render() {
    const {
      fetchYoutubeResponse,
      isLoading,
      fetchYoutube
    } = this.props;
    return (
      <div>
        <Loader isLoading={isLoading} />
        <TextInput
          fetchUserAction={fetchYoutube}
          label="Search Youtube"
        />
        <VideoPlayer currentVideo={this.state.currentVideo} />
        <div style={styles.flexContainer}>
          <VideoList
            currentVideoId={this.state.currentVideo}
            response={fetchYoutubeResponse}
            setCurrentVideo={this.setCurrentVideo}
            setCurrentKey={this.setCurrentKey}
            currentKey={this.state.currentKey}
          />
        </div>
      </div>
    );
  }
}


const mapState = ({ fetchYoutubeReducer: reducer }) => ({
  fetchYoutubeResponse: reducer.fetchYoutubeResponse,
  isLoading: reducer.isLoading,
  currentVideo: reducer.currentVideo,
  currentKey: reducer.currentKey,
});


export default connect(mapState, { fetchYoutube })(YoutubeSearch);
