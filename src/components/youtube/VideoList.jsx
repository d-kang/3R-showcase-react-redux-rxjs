import React from 'react';
import VideoItem from './VideoItem';

export default ({ response, setCurrentVideo, currentVideoId, currentKey } : { response: any, setCurrentVideo: any, currentVideoId: number, currentKey: string  }) => (
  response.map((props: any, i: number) => (
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
