import React from 'react';
import { connect } from 'react-redux';
import { fetchYoutube } from '../../actions';
import VideoPlayer from './VideoPlayer';
import Loader from '../ui/Loader';
import VideoList from './VideoList';
import TextInput from '../ui/TextInput';

const styles = {
  flexContainer: {
    minWidth: '200px',
    maxWidth: '400px',
    flexBasis: 'auto', /* default value */
    flexGrow: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    flexFlow: 'row wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
};

class YoutubeSearch extends React.Component {
  state = {
    currentVideo: "AQBh9soLSkI",
    currentKey: null,
  };
  setCurrentVideo = (currentVideo, currentKey) => {
    // setTimeout(() =>   this.setState({ currentVideo, currentKey }), 10000)
    this.setState({ currentVideo, currentKey });
  };
  render() {
    const { fetchYoutubeResponse, isLoading, fetchYoutube } = this.props;
    const { currentVideo, currentKey } = this.state;
    const { setCurrentVideo } = this;
    return (
      <div>
        <Loader isLoading={isLoading} />
        <button
          onClick={() => history.back()}
        >go back</button>
        <button
          onClick={() => history.forward()}
        >go forward</button>
        <TextInput fetchUserAction={fetchYoutube} label="Search Youtube" />
        <VideoPlayer currentVideo={currentVideo} />
        <div style={styles.flexContainer}>
          <VideoList
            currentVideoId={currentVideo}
            response={fetchYoutubeResponse}
            setCurrentVideo={setCurrentVideo}
            currentKey={currentKey}
          />

        </div>
      </div>
    );
  }
}


const mapState = ({ fetchYoutubeReducer: reducer }) => ({
  fetchYoutubeResponse: reducer.fetchYoutubeResponse,
  isLoading: reducer.isLoading,
  // currentVideo: reducer.currentVideo,
  // currentKey: reducer.currentKey,
});


export default connect(mapState, { fetchYoutube })(YoutubeSearch);
