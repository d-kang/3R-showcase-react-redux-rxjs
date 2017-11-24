import React, { Component } from 'react';

class VideoItem extends Component {
  setToPlay = () => {
    this.props.setCurrentVideo(this.props.id.videoId, this.props.myKey);
    // this.props.setCurrentKey(this.props.myKey);
  }

  render() {
    const { snippet, id, setCurrentVideo, myKey, currentKey } = this.props;
    return (
      <div>
        <img
          alt={snippet.description}
          onClick={this.setToPlay}
          src={snippet.thumbnails.medium.url}
        />
        { myKey === currentKey && <div>Now Playing</div>}
        <div>{snippet.title}</div>
      </div>
    )
  }
}

export default VideoItem;
