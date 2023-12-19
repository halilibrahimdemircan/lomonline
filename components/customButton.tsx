import React from "react";
import { Cinzel } from "next/font/google";

type Props = {
  text: string;
  bg: string;
  link?: string;
  action?: (() => void) | (() => Promise<void>);
};
const cinzel = Cinzel({ subsets: ["latin"] });
const CustomButton = ({ text, bg, link, action }: Props) => {
  return (
    <div>
      {text == "line" ? (
        <hr className="my-3 mx-20"></hr>
      ) : (
        <button
          onClick={action}
          className={`${bg} ${cinzel.className} text-[18px] leading-4 tracking-normal text-center w-full px-3 py-4 font-medium shadow-sm text-white my-2 rounded-md `}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
