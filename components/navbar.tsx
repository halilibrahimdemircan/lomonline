import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import icon from "../public/icon.png";
type Props = {};

const navbar = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log("currentPath :>> ", currentPath);
  const pathList = [
    {
      path: "/home",
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
      className=" w-full flex justify-between  text-gray-500 px-32"
    >
      <div className=" flex items-center">
        <Image
          alt="Land of Mush Icon"
          src={icon}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className=" flex  h-[84px]">
        <ul className="flex gap-6  items-center justify-center">
          {pathList.map((pathObj, index) => {
            return (
              <li
                key={index}
                className={`${
                  currentPath == pathObj.path ? "text-orange-500" : ""
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
