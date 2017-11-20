/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:48am
 */
import React, { Component } from 'react';

class YoutubeSearch extends Component {
  state = {
    payload: '',
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
        <iframe width="420" height="345" src="http://www.youtube.com/embed/AQBh9soLSkI?autoplay=1" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default YoutubeSearch;
