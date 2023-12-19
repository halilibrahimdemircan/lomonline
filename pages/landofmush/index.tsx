import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../components/modal";
import Image from "next/image";
import lomBrand from "../../public/lomBrand.png";
import song from "../../public/song.png";
import gitbook from "../../public/gitbook.png";
import settings from "../../public/settings.png";
import x from "../../public/x.png";
import useSound from "use-sound";

const Homepage: NextPage = () => {
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [play, { stop, pause, duration, sound }] = useSound(
    "/sounds/piano.wav",
    {
      onplay: () => {
        setPlaying(true);
      },
      onstop: () => {
        setPlaying(false);
      },
    }
  );
  const router = useRouter();
  const handleClickSong = () => {
    console.log("sound :>> ", sound);
    if (playing) {
      stop();
    } else {
      play();
    }
  };
  const iconList = [
    {
      src: song,
      style: "",
      action: handleClickSong,
    },
    {
      src: gitbook,
      style: "",
      // action: () => router.push("/"),
    },
    {
      src: settings,
      style: "",
      action: () => setOpen((o) => !o),
    },
    {
      src: x,
      style: "",
      action: () => router.push("/"),
    },
  ];

  const notify = () =>
    toast.info("YOU HAVE SUCCESSFULLY JOINED THE WHITELIST!");
  return (
    <div>
      <Modal open={open} setOpen={setOpen} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* <button onClick={notify}>JOIN</button> */}
      <div className="flex w-full justify-between px-[128px] py-8">
        <div className="">
          <Image
            alt="Land of Mush Icon"
            src={lomBrand}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex items-center gap-2">
          {iconList.map((icon, index) => {
            return (
              <div
                onClick={icon.action}
                key={index}
                className={`${icon.style} bg-gray-700  rounded-lg h-12 flex items-center px-[18px] cursor-pointer`}
              >
                {index === 0 ? (
                  playing ? (
                    "muted icon"
                  ) : (
                    <Image
                      alt="Land of Mush Icon"
                      src={icon.src}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )
                ) : (
                  <Image
                    alt="Land of Mush Icon"
                    src={icon.src}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
