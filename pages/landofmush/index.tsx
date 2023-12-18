import type { NextPage } from "next";
import Image from "next/image";
import house from "../../public/house.png";
import mining from "../../public/mining.png";
import crafting from "../../public/crafting.png";
import footerBg from "../../public/footerBg.png";
import { Cinzel, Roboto_Serif } from "next/font/google";

import mush from "../../public/mush.png";
import LomElement from "../../components/lomElement";
const cinzel = Cinzel({ subsets: ["latin"] });
const roboto = Roboto_Serif({ subsets: ["latin"] });

const h2ClassName = `${cinzel.className} text-[32px] leading-12 font-medium tracking-tight`;
const h3ClassName = `${cinzel.className} text-[24px] leading-12 font-medium tracking-tight`;
const h4ClassName = `${roboto.className} text-[16px] leading-12 font-medium tracking-tight`;

const Landofmushpage: NextPage = () => {
  const elementList = [
    {
      text: "BUILD YOUR HOUSE",
      subText: "A house of one's own",
      src: house,
    },
    {
      text: "MINING",
      subText: "Mine and craft items",
      src: mining,
    },
    {
      text: "CRAFTING",
      subText: "A table and dozens of items you can craft",
      src: crafting,
    },
  ];
  return (
    <>
      <div
        style={{ height: "100% " }}
        className="  flex flex-col justify-center items-center  gap-8"
      >
        <div className="flex flex-col justify-center text-center gap-4   mt-12">
          <h3 className={h3ClassName}>
            A unique experience with unique dynamics
          </h3>
          <h4 className={h4ClassName}>
            Here is the fantasy world waiting for you, ready and calling!
          </h4>
        </div>
        <button
          style={{
            borderRadius: "8px",
            background:
              "linear-gradient(102deg, #FFAA45 15.72%, #FF8A00 64.05%)",
            boxShadow: "0px 4px 0px 0px #B06D20",
          }}
          className="text-white w-64 h-12 "
        >
          PLAY NOW
        </button>
      </div>
      <div className="flex  items-center justify-center pb-10 px-10 flex-col gap-6">
        <h2 className={h2ClassName}>WATCH TRAILER</h2>
        <iframe
          className="w-3/4 h-[512px] rounded-xl"
          // width="560"
          // height="315"
          src="https://www.youtube-nocookie.com/embed/pPd8Ef9yzOA?si=2BDkQwpYo3m4TU7Z&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <h3 className={h3ClassName}>
          A unique experience with unique dynamics
        </h3>
        <h4 className={h4ClassName}>
          Here is the fantasy world waiting for you, ready and calling!
        </h4>
      </div>

      <div className="flex flex-col gap-3 items-center justify-center">
        <Image
          alt="Land of Mush Icon"
          src={mush}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h2 className={h2ClassName}>EXPERIENCES</h2>
        <div className="flex justify-center items-center  text-center mt-3">
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
          <div className=" w-full flex justify-center">
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
