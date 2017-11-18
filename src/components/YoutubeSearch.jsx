/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 11:13am
 */
import React, { Component } from 'react';

class YoutubeSearch extends Component {
  state = {
    payload: '',
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { payload } = this.state;
    console.log('payload', payload);
    fetch('http://localhost:3500/api/youtube', { payload })
      .then((res) => res.json())
      .then((res) => console.log('res>>>', res))
      .catch((err) => console.log('err>>>', err));
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
      </div>
    );
  }

}

export default YoutubeSearch;
