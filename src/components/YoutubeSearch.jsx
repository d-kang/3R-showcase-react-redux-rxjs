/**
 * @Date:   11.18.2017 10:02am
 * @Filename: YoutubeSearch.jsx
 * @Last modified time: 11.18.2017 10:25am
 */

import React, { Component } from 'react';

class YoutubeSearch extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3500/api/youtube')
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          action=""
        >
          <input type="text"/>
          <button>Search Youtube</button>
        </form>

      </div>
    );
  }

}

export default YoutubeSearch;
