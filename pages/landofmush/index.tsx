import type { NextPage } from "next";
import Image from "next/image";
import house from "../../public/house.png";
import mining from "../../public/mining.png";
import crafting from "../../public/crafting.png";
import footerBg from "../../public/footerBg.png";

import mush from "../../public/mush.png";
import LomElement from "../../components/lomElement";
const Landofmushpage: NextPage = () => {
  const elementList = [
    {
      text: "BUILD YOUR HOUSE",
      subText: "A house of one's own",
      src: house,
    },
    {
      text: "Mining",
      subText: "Mine and craft items",
      src: mining,
    },
    {
      text: "CRafting",
      subText: "A table and dozens of items you can craft",
      src: crafting,
    },
  ];
  return (
    <>
      <div className="  flex justify-center items-center  h-full ">
        <button
          style={{
            borderRadius: "8px",
            background:
              "linear-gradient(102deg, #FFAA45 15.72%, #FF8A00 64.05%)",
            boxShadow: "0px 4px 0px 0px #B06D20",
          }}
          className="text-white w-64 h-12 ml-10"
        >
          PLAY NOW
        </button>
      </div>
      <div className=" flex border border-green-400 items-center justify-center p-10 flex-col gap-6">
        <h2>WATCH TRAILER</h2>
        <iframe
          className="w-3/4 h-[512px] rounded-xl"
          // width="560"
          // height="315"
          src="https://www.youtube-nocookie.com/embed/pPd8Ef9yzOA?si=2BDkQwpYo3m4TU7Z&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <h3>A unique experience with unique dynamics</h3>
        <h4>Here is the fantasy world waiting for you, ready and calling!</h4>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          alt="Land of Mush Icon"
          src={mush}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h2>EXPERIENCES</h2>
        <div className="flex justify-center items-center border text-center">
          {elementList.map((element, index) => {
            return (
              <LomElement
                text={element.text}
                subText={element.subText}
                src={element.src}
              />
            );
          })}
        </div>
        <div>
          <div className="border border-blue-500 w-full flex justify-center">
            <Image
              className=""
              alt="Land of Mush Icon"
              src={footerBg}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              quality={100}
              // fill
              // sizes="100vw"
              // style={{
              //   objectFit: "cover",
              // }}
            />
          </div>
          <button>JOIN</button>
        </div>
      </div>
    </>
  );
};

export default Landofmushpage;
