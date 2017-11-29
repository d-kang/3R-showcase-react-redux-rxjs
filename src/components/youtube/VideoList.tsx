import * as React from "react";
import VideoItem from './VideoItem';
export default ({ response, setCurrentVideo, currentVideoId, setCurrentKey, currentKey } : { response: object[], setCurrentVideo: void, currentVideoId: string, setCurrentKey: void, currentKey: void  }) => (
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
