/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */

import React, { Component } from 'react';
import youTubeSampleData from '../data/data.json';

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
    this.myInit.body = JSON.stringify({ payload });
    fetch('http://localhost:3500/api/youtube', this.myInit)
      .then(res => res.json())
      .then((response) => {
        this.setState({ response });
        return response;
      })
      .then(res => console.log('res>>>', JSON.stringify(res, null, 2)))
      .catch(err => console.log('err>>>', err));
  }
  handleInput = (e) => {
    const payload = e.target.value;
    this.setState({ payload });
  }
  render() {
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
            this.state.response.items.map(({id, snippet}, index) => {
              return (
                <div>
                  <img onClick={() => {
                    this.setState({ currentVideo: id.videoId })
                    this.log(e, id);
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


export default YoutubeSearch;
