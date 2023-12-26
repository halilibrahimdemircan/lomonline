import type { NextPage } from "next";
import { useRef } from "react";

const Joinpage: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-full relative">
      <iframe
        className="w-[962px] h-[640px] rounded"
        id="game_drop"
        // src="https://html-classic.itch.zone/html/9338311/webgl0x3a/index.html"
        src="https://html-classic.itch.zone/html/9384198/webl05/index.html"
        // frameBorder="0"
        // allowFullScreen={true}
        // scrolling="no"
        allowTransparency={true}
        // webkitAllowFullScreen={true}
        // mozallowfullscreen={true}
        // msallowfullscreen={true}
        // allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
      ></iframe>
    </div>
  );
};

export default Joinpage;
