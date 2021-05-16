import React, { useState } from "react";
import { FramesFromVideo } from "../FramesFromVideo/FramesFromVideo.jsx";

export const ChooseVideo = () => {
  const [blob, setBlob] = useState(null);
  const [option, setOption] = useState("6 frames");
  const handleGetFile = (e) => {
    let file = e.target.files[0];
    let blob = new Blob([file], { type: file.type });
    setBlob(blob);
  };

  const handleOptions = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <input type="file" onChange={handleGetFile} />
      <div className="options">
        <label htmlFor="contactChoice1">6 frames</label>
        <input
          id="contactChoice1"
          name="option"
          type="radio"
          onInput={handleOptions}
          value="6 frames"
          checked
        />
        <label htmlFor="contactChoice2">5 sec</label>
        <input
          id="contactChoice2"
          name="option"
          type="radio"
          onInput={handleOptions}
          value="5 sec"
        />
      </div>
      <FramesFromVideo blob={blob} option={option} />
    </div>
  );
};
