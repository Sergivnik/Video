import React, { useState } from "react";
import { FramesFromVideo } from "../FramesFromVideo/FramesFromVideo.jsx";

export const ChooseVideo = () => {
  const [srcUrl, setSrcUrl] = useState(null);
  const [blob, setBlob] = useState(null);
  const handleGetFile = (e) => {
    let file = e.target.files[0];
    console.log(file.type);
    setSrcUrl(URL.createObjectURL(file));
    let blob = new Blob([file], { type: file.type });
    setBlob(blob);
  };

  return (
    <div>
      <input type="file" onChange={handleGetFile} />
      <FramesFromVideo src={srcUrl} blob={blob} />
    </div>
  );
};
