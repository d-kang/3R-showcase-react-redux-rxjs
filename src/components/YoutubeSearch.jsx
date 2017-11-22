/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import youTubeSampleData from '../data/data.json';
import { fetchYoutube } from '../actions';


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
    response: youTubeSampleData,
    currentVideo: 'AQBh9soLSkI',
  }

  headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  }
  myInit = {
    method: 'POST',
    headers: this.headers,
    body: '',
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { payload } = this.state;
    this.props.fetchYoutube(payload);
    // const { payload } = this.state;
    // this.myInit.body = JSON.stringify({ payload });
    // fetch('http://localhost:3500/api/youtube', this.myInit)
    //   .then(res => res.json())
    //   .then((response) => {
    //     this.setState({ response });
    //     return response;
    //   })
    //   .then(res => console.log('res>>>', JSON.stringify(res, null, 2)))
    //   .catch(err => console.log('err>>>', err));
  }
  handleInput = (e) => {
    const payload = e.target.value;
    this.setState({ payload });
  }
  render() {
    const { fetchYoutubeResponse } = this.props;
    console.log('fetchYoutubeResponse', fetchYoutubeResponse);
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
          {
            fetchYoutubeResponse.map(({id, snippet}, i) => {
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
});


export default connect(mapState, { fetchYoutube })(YoutubeSearch);
