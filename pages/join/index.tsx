import type { NextPage } from "next";
import Image from "next/image";
import fullScreen from "../../public/fullScreen.png";

const Joinpage: NextPage = () => {
  const toggleFullScreen = () => {
    const iframe = document.getElementById("gameFrame");

    if (iframe) {
      iframe.requestFullscreen();
    }
  };
  return (
    <div className="flex justify-center items-center h-full relative">
      <iframe
        className="w-[962px] h-[640px] rounded"
        id="gameFrame"
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
      <div className="h-full p-6">
        <div
          onClick={toggleFullScreen}
          className={` bg-gray-700  rounded-lg h-12 flex items-center px-[18px] cursor-pointer`}
        >
          <Image
            alt="Land of Mush Icon"
            src={fullScreen}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Joinpage;
