import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/24/outline";
import { Cinzel } from "next/font/google";
import lomBlack from "../public/lomBlack.png";

import Image from "next/image";
import CustomButton from "./customButton";
import x from "../public/x.png";
import { useRouter } from "next/router";

const cinzel = Cinzel({ subsets: ["latin"] });

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ open, setOpen }: Props) {
  const router = useRouter();

  const buttons = [
    {
      text: "JOIN GAME",
      bg: "bg-orange-500",
      action: () => {},
    },
    {
      text: "MUSHBOOMERS",
      bg: "bg-indigo-500",
      action: () => {
        const newWindow = window.open(
          "https://opensea.io/collection/mushboomers",
          "_blank",
          "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
      },
    },
    {
      text: "line",
      bg: "bg-indigo-500",
      action: () => {},
    },
    {
      text: "APPLY FOR WHITELIST",
      bg: "bg-gray-500",
      action: () => {},
    },
    {
      text: "DISCORD COMMUNITY",
      bg: "bg-indigo-500",
      action: () => {
        const newWindow = window.open(
          "https://discord.com/invite/nftinitcom",
          "_blank",
          "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
      },
    },
  ];
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`${cinzel.className} relative z-10`}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center ">
                    <Image
                      alt="Land of Mush Icon"
                      src={lomBlack}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div
                    onClick={() => setOpen(false)}
                    className="mx-auto flex items-center justify-center bg-orange-500 w-8 h-8 rounded-lg absolute right-2 top-2 cursor-pointer"
                  >
                    <Image
                      alt="Land of Mush Icon"
                      src={x}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  {buttons.map((button, index) => {
                    return (
                      <div key={index}>
                        <CustomButton
                          text={button.text}
                          bg={button.bg}
                          action={button.action}
                        />
                      </div>
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
