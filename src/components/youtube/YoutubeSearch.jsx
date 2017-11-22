/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */

import React, { Component } from 'react';
import {
  CircularProgress,
  MuiThemeProvider as MuiContainer,
} from 'material-ui';
import { connect } from 'react-redux';
import { fetchYoutube } from '../../actions';

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
  handleSubmit = (e) => {
    e.preventDefault();
    const { payload } = this.state;
    this.props.fetchYoutube(payload);
  }
  handleInput = (e) => {
    const payload = e.target.value;
    this.setState({ payload });
  }
  render() {
    const { fetchYoutubeResponse, isLoading } = this.props;
    console.log('isLoading', isLoading);
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            onChange={this.handleInput}
          />
          <button>Search Youtube</button>
        </form>
        <iframe width="420" height="345" src={`http://www.youtube.com/embed/${this.state.currentVideo}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>

        <div style={styles.flexContainer}>
          { isLoading
              ? <MuiContainer>
                  <CircularProgress />
                </MuiContainer>
              : fetchYoutubeResponse.map(({id, snippet}, i) => {
                  return (
                    <div key={i}>
                      <img onClick={() => {
                        this.setState({ currentVideo: id.videoId })

                      }} src={snippet.thumbnails.medium.url} alt="" />
                      <div>{snippet.title}</div>
                    </div>
                  )
                })

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
