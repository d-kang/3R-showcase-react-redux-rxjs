import React from 'react';
import VideoItem from './VideoItem';

export default ({ response, setCurrentVideo, currentVideoId, currentKey }) => (
  response.map((props, i) => (
    <VideoItem
      key={i}
      currentVideoId={currentVideoId}
      setCurrentVideo={setCurrentVideo}
      currentKey={currentKey}
      myKey={i}
      {...props}
    />
  ))
);
