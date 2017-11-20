/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */
import React, { Component } from 'react';
import youTubeSampleData from '../data/data.json';
class YoutubeSearch extends Component {
  state = {
    payload: '',
    response: youTubeSampleData,
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
      .then(res => console.log('res>>>', JSON.stringify(res, null, 2)))
      .catch(err => console.log('err>>>', err));
  }
  handleInput = (e) => {
    const payload = e.target.value;
    this.setState({ payload });
  }
  render() {
    console.log('response', this.state.response);
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
        <iframe width="420" height="345" src="http://www.youtube.com/embed/AQBh9soLSkI?autoplay=1" frameBorder="0" allowFullScreen></iframe>

        <div>
          {
            this.state.response.items.map(({snippet}, index) => {
              return (
                <div>
                  <img src={snippet.thumbnails.medium.url} alt=""/>
                </div>
              )
            })
          }
        </div>

      </div>
    );
  }
}

// {
//   "kind": "youtube#searchResult",
//   "etag": "ld9biNPKjAjgjV7EZ4EKeEGrhao/cQcWyA3ZtzMxISquwIpGbyAn-io",
//   "id": {
//     "kind": "youtube#video",
//     "videoId": "SAvXjWgKSQ8"
//   },
//   "snippet": {
//     "publishedAt": "2017-11-18T16:34:37.000Z",
//     "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
//     "title": "lofi hip hop radio - beats to relax/study to",
//     "description": "Thank you for listening, I hope you will have a good time here :) ▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭ ▸Update: -Day mode will be available soon ...",
//     "thumbnails": {
//       "default": {
//         "url": "https://i.ytimg.com/vi/SAvXjWgKSQ8/default_live.jpg",
//         "width": 120,
//         "height": 90
//       },
//       "medium": {
//         "url": "https://i.ytimg.com/vi/SAvXjWgKSQ8/mqdefault_live.jpg",
//         "width": 320,
//         "height": 180
//       },
//       "high": {
//         "url": "https://i.ytimg.com/vi/SAvXjWgKSQ8/hqdefault_live.jpg",
//         "width": 480,
//         "height": 360
//       }
//     },
//     "channelTitle": "ChilledCow",
//     "liveBroadcastContent": "live"
//   }
// }

export default YoutubeSearch;
