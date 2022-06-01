import React from "react";
import Video from "../assets/video/video.mp4";
import SwitchButton from "./shared/SwitchButton";

const WatchVideo = () => {
  return (
    <div className="watch_video_container">
      <video style={{ width: "100%", height: "50vh" }} autoplay controls>
        <source
          style={{ width: "100%", height: "40vh" }}
          src={Video}
          type="video/mp4"
        />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="watch_video_info">
        <div className="watch_video_info_content">
          <p>Watch Videos</p>
          <h2>Exclusive Video Presentation About Recent Project</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <SwitchButton />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
