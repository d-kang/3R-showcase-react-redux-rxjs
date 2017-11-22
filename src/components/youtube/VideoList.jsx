import React from 'react';

export default ({ response, setCurrentVideo }) => (
  response.map(({ id, snippet }, i) => (
    <div
      key={i}
    >
      <img
        alt={snippet.description}
        onClick={() => setCurrentVideo(id.videoId)}
        src={snippet.thumbnails.medium.url}
      />
      <div>{snippet.title}</div>
    </div>
  ))
);
