import React, { useEffect, useState } from "react";
import Video from "../assets/video/video4.mp4";
import DemoSwitchButton from "./shared/DemoSwitchButton";
import SectionSubHeader from "./shared/SectionSubHeader";

const WatchVideo = () => {
  const [playing, setPlaying] = useState(true);

  const handleVideoPlay = () => {
    if (playing) {
      setPlaying(false);
      pauseVideoHandler();
    } else {
      setPlaying(true);
      playVideoHandler();
    }
  };

  const playVideoHandler = () => {
    document.getElementById("video").play();
  };

  const pauseVideoHandler = () => {
    document.getElementById("video").pause();
  };

  function isInViewport() {
    const rect = document.getElementById("videoDiv").getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    if (isInViewport()) {
      playVideoHandler();
    }
  }, []);

  return (
    <>
      <div className="watch_video_container" id="videoDiv">
        <div className="watch_video_info_content">
          <SectionSubHeader title="Watch Videos" />
          <h1>Exclusive Video Presentation</h1>
          <h1 className="negative-margin-5 marginBottom-big">
            About Recent Project
          </h1>
          <p className="font-size-14 marginBottom-extralarge">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <DemoSwitchButton
            title="Need Any Project"
            colorFlag="#ff4917"
            slideColor="#14212a"
            fontColor="white"
          />
        </div>
        <div className="watch_video_shadow"></div>
        <video
          id="video"
          style={{ width: "100%" }}
          autoPlay={true}
          muted="muted"
          loop
        >
          <source
            style={{ width: "100%", height: "100% !important" }}
            src={Video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="play_button">
          <div className="play_button_content">
            {!playing && (
              <div className="play_button_icon" onClick={handleVideoPlay}></div>
            )}
            {playing && (
              <div className="play_button_icon_pause" onClick={handleVideoPlay}>
                <div className="play_button_icon_pause_left"></div>
                <div className="play_button_icon_pause_right"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchVideo;
