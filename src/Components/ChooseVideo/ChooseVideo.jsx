import React, { useState } from "react";
import {FramesFromVideo} from "../FramesFromVideo/FramesFromVideo.jsx"

export const ChooseVideo = () => {
  const [srcUrl, setSrcUrl] = useState(null);
  const handleGetFile = (e) => {
    let file = e.target.files[0];
    setSrcUrl(URL.createObjectURL(file));
    console.log(srcUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleGetFile} />
      <FramesFromVideo src={srcUrl} />
    </div>
  );
};
