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
    payload: '',
    currentVideo: 'AQBh9soLSkI',
  }
  // searchYoutube = (val) => {
  //   const { payload } = this.state;
  //   this.props.fetchYoutube(val);
  // }
  // handleInput = (e) => {
  //   const payload = e.target.value;
  //   this.setState({ payload });
  // }
  // setCurrentVideo = (currentVideo) => {
  //   this.setState({ currentVideo })
  // }

  render() {
    const { fetchYoutubeResponse, isLoading, fetchYoutube } = this.props;
    console.log('isLoading', isLoading);
    return (
      <div>
        <TextInput
          fetchUserAction={fetchYoutube}
          label="Search Youtube"
        />

        {/* <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            onChange={this.handleInput}
          />
          <button>Search Youtube</button>
        </form> */}
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
