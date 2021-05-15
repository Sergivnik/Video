import React from "react";

export const FramesFromVideo = (props) => {
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
  return (
    <div>
      <video
        src={props.src}
        controls={true}
        width="600"
        height="350"
        onLoadedMetadata={handleLoadedmetadata}
      ></video>
      <div id="canvasDiv"></div>
    </div>
  );
};
