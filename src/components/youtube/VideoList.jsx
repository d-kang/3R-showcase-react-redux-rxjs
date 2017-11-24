import React from 'react';
import VideoItem from './VideoItem';
export default ({ response, setCurrentVideo, currentVideoId, setCurrentKey, currentKey }) => (
  response.map((props, i) => (
    <VideoItem
      key={i}
      currentVideoId={currentVideoId}
      setCurrentVideo={setCurrentVideo}
      setCurrentKey={setCurrentKey}
      currentKey={currentKey}
      myKey={i}
      {...props}
    />
  ))
);
