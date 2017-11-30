import * as React from "react";

interface PropTypes {
  snippet: any,
  id: any,
  setCurrentVideo: any,
  myKey: number,
  currentKey: number,

}

class VideoItem extends React.Component<any, any> {
  setToPlay = () => {
    this.props.setCurrentVideo(this.props.id.videoId, this.props.myKey);
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
