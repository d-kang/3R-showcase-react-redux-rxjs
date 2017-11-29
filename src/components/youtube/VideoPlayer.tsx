import * as React from "react";

export default ({ currentVideo }) => (
  <iframe
    width="854"
    height="510"
    src={`http://www.youtube.com/embed/${currentVideo}?autoplay=1`}
    frameBorder="0"
    allowFullScreen
  ></iframe>
);
