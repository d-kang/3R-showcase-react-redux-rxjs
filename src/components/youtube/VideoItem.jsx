import React, { Component } from 'react';

class VideoItem extends Component {
  state = {
    nowPlaying: false,
  }
  componentDidMount() {
    this.setState({ nowPlaying: (this.props.currentVideoId === this.props.id.videoId) })
  }
  // isPlaying = (this.props.currentVideoId === this.props.id.videoId)
  setToPlay = () => {
    // const nowPlaying = (this.props.currentVideoId === this.props.id.videoId)
    this.props.setCurrentVideo(this.props.id.videoId)

    // this.setState({ nowPlaying: !this.state.nowPlaying }, () => {
    //   this.setState({ ...this.state });
    // });

    this.props.setCurrentKey(this.props.myKey);
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
        {myKey === currentKey && <div>Now Playing</div>}
        <div>{snippet.title}</div>
      </div>
    )
  }
}

export default VideoItem;
