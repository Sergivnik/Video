import React, { useEffect, useState } from "react";
import "./FramesFromVideo.sass";

export const FramesFromVideo = (props) => {
  const [src, setSrc] = useState(null);
  const handleLoadedmetadata = async (e) => {
    console.log(e.target.duration);
    let video = e.target;
    video.volume = 0;
    let div = document.getElementById("canvasDiv");
    div.innerHTML = "";
    let width = video.clientWidth;
    div.style.width = width + "px";
    let canvas;
    let step;
    if (props.option == "6 frames") {
      step = (video.duration * 0.98) / 5;
    }
    if (props.option == "5 sec") {
      step = 5;
    }
    for (let i = video.duration / 100; i <= video.duration; i = i + step) {
      canvas = document.createElement("canvas");
      canvas.width = width / 6;
      canvas.height = "100";
      let imgHeight = (video.videoHeight / video.videoWidth) * canvas.width;
      div.append(canvas);
      let ctx = canvas.getContext("2d");
      video.currentTime = i;
      await video.play();
      ctx.drawImage(video, 0, 0, canvas.width, imgHeight);
    }
    video.volume = 1;
  };
  useEffect(() => {
    if (props.blob != null) {
      let src = URL.createObjectURL(props.blob);
      setSrc(src);
    }
  }, [props]);

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
