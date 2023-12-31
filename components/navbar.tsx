import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import icon from "../public/icon.png";
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type Props = {};
const inter = Inter({ subsets: ["latin"] });

const navbar = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const pathList = [
    {
      path: "/",
      name: "Homepage",
    },
    {
      path: "/landofmush",
      name: "Land Of Mush",
    },
    {
      path: "/mint",
      name: "Mint",
    },
    {
      path: "/community",
      name: "Community",
    },
    {
      path: "/join",
      name: "Join",
    },
  ];
  return (
    <div
      style={{ height: "96px" }}
      className=" w-full flex justify-between  text-gray-500 px-32 bg-black"
    >
      <div className=" flex items-center">
        <Image
          alt="Land of Mush Icon"
          src={icon}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={`${inter.className} flex  h-[84px] gap-4`}>
        <div className="flex items-center">
          <ConnectButton />
        </div>
        <ul className="flex gap-6  items-center justify-center">
          {pathList.map((pathObj, index) => {
            return (
              <li
                key={index}
                className={`${
                  currentPath == pathObj.path
                    ? "text-orange-500  border-0 border-t border-orange-500 backdrop-blur-lg h-full flex justify-center items-center text-center"
                    : ""
                }`}
              >
                <Link href={pathObj.path}>{pathObj.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default navbar;
