import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/24/outline";
import { Cinzel } from "next/font/google";
import lomBlack from "../public/lomBlack.png";

import Image from "next/image";
import CustomButton from "./customButton";
const cinzel = Cinzel({ subsets: ["latin"] });

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ open, setOpen }: Props) {
  const buttons = [
    {
      text: "JOIN GAME",
      link: "",
      bg: "bg-orange-500",
      action: () => {},
    },
    {
      text: "MUSHBOOMERS",
      link: "https://opensea.io/collection/mushboomers",
      bg: "bg-indigo-500",
      action: () => {},
    },
    {
      text: "line",
      link: "https://opensea.io/collection/mushboomers",
      bg: "bg-indigo-500",
      action: () => {},
    },
    {
      text: "APPLY FOR WHITELIST",
      link: "https://opensea.io/collection/mushboomers",
      bg: "bg-gray-500",
      action: () => {},
    },
    {
      text: "DISCORD COMMUNITY",
      link: "https://discord.com/invite/nftinitcom",
      bg: "bg-indigo-500",
      action: () => {},
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
                  <div className="mt-3 text-center sm:mt-5">
                    {/* <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title> */}
                    {/* <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  {/* <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button> */}
                  {buttons.map((button, index) => {
                    return (
                      <CustomButton
                        text={button.text}
                        bg={button.bg}
                        link={button.link}
                        action={button.action}
                      />
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