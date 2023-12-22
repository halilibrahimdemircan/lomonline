import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import house from "../public/house.png";
import mining from "../public/mining.png";
import crafting from "../public/crafting.png";
import footerBg from "../public/footerBg.png";
import warriorLeft from "../public/warriorLeft.png";
import warriorRight from "../public/warriorRight.png";
import greenMush from "../public/greenMush.png";
import mush1 from "../public/mush1.png";
import warriorwsRight from "../public/warriorwsRight.png";
import discordIcon from "../public/discordIcon.png";

import { Cinzel, Roboto_Serif } from "next/font/google";

import mush from "../public/mush.png";
import LomElement from "../components/lomElement";
import FooterBackground from "../components/footerBackground";
const cinzel = Cinzel({ subsets: ["latin"] });
const roboto = Roboto_Serif({ subsets: ["latin"] });

const h2ClassName = `${cinzel.className} text-[32px] leading-12 whitespace-nowrap `;
const h3ClassName = `${cinzel.className} text-[24px] leading-12 whitespace-nowrap `;
const h4ClassName = `${roboto.className} text-[16px] leading-12 whitespace-nowrap text-gray-500`;

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
      <Head>
        <title>Land Of Mush</title>
        <meta property="og:title" content="Land Of Mush" key="title" />
      </Head>
      <div style={{ height: "calc(100% - 84px)" }} className="flex">
        <div className="w-1/3 items-end justify-end flex">
          <Image
            className="w-full"
            alt="Land of Mush Icon"
            src={warriorLeft}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          style={{ height: "calc(100% - 84px)" }}
          className="w-1/3  flex flex-col justify-center items-center  gap-8  pb-12  "
        >
          <div className="flex flex-col justify-center text-center gap-4  pt-64">
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
        <div className="w-1/3 items-end justify-end flex">
          <Image
            alt="Land of Mush Icon"
            src={warriorRight}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex  items-center justify-center pt-16 pb-10 px-10 flex-col gap-6">
        <h2 className={h2ClassName}>WATCH TRAILER</h2>
        <iframe
          className="w-3/4 h-[512px] rounded-xl"
          // width="560"
          // height="315"
          src="https://www.youtube-nocookie.com/embed/pPd8Ef9yzOA?si=2BDkQwpYo3m4TU7Z&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <h3 className={`${h3ClassName} pt-6`}>
          A unique experience with unique dynamics
        </h3>
        <h4 className={h4ClassName}>
          Here is the fantasy world waiting for you, ready and calling!
        </h4>
      </div>

      <div className="flex flex-col gap-3 items-center justify-center pt-12">
        <Image
          alt="Land of Mush Icon"
          src={mush}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h2 className={h2ClassName}>EXPERIENCES</h2>
        <div className="flex justify-center items-center  text-center mt-3 gap-8">
          {elementList.map((element, index) => {
            return (
              <div key={index}>
                <LomElement
                  text={element.text}
                  subText={element.subText}
                  src={element.src}
                />
              </div>
            );
          })}
        </div>

        <div className=" w-full h-full flex justify-center items-end">
          <FooterBackground src={footerBg} />
          <div className="w-full h-full flex justify-between ">
            <div className="w-1/3 items-end justify-start flex">
              <Image
                className=""
                alt="Land of Mush Icon"
                src={greenMush}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                className=""
                alt="Land of Mush Icon"
                src={mush1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/3 items-center justify-center flex flex-col gap-4">
              <div>
                <Image
                  className=""
                  alt="Land of Mush Icon"
                  src={discordIcon}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div>
                <h2 className={h2ClassName}>JOIN DISCORD</h2>
              </div>
              <div>
                <h4 className={h4ClassName}>
                  Here is the fantasy world waiting for you, ready and calling!
                </h4>
              </div>
              <div className="pt-3">
                <button className="rounded-lg bg-indigo-500 text-white px-4 py-2 shadow-indigo-500">
                  Discord Community
                </button>
              </div>
            </div>
            <div className="w-1/3 items-end justify-end flex ">
              <Image
                className=""
                alt="Land of Mush Icon"
                src={warriorwsRight}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landofmushpage;
