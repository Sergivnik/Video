import React, { useEffect, useState } from "react";

export const FramesFromVideo = (props) => {
  const [src, setSrc] = useState(null);
  const handleLoadedmetadata = async (e) => {
    console.log(e.target.duration);
    let video = e.target;
    video.volume = 0;
    let div = document.getElementById("canvasDiv");
    let canvas;
    for (
      let i = video.duration / 100;
      i <= video.duration;
      i = i + (video.duration * 0.98) / 5
    ) {
      canvas = document.createElement("canvas");
      canvas.width = "350";
      canvas.height = "250";
      div.append(canvas);
      let ctx = canvas.getContext("2d");
      video.currentTime = i;
      await video.play();
      ctx.drawImage(video, 0, 0, 450, 250);
    }
    video.volume = 1;
  };
  useEffect(() => {
    if (props.blob != null) {
      let src = URL.createObjectURL(props.blob);
      setSrc(src);
    }
  },[props]);

  return (
    <div>
      <video
        src={src}
        controls={true}
        width="600"
        height="350"
        onLoadedMetadata={handleLoadedmetadata}
      ></video>
      <div id="canvasDiv"></div>
    </div>
  );
};
