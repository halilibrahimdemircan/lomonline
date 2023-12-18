import type { NextPage } from "next";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../components/modal";
import Image from "next/image";
import lomBrand from "../../public/lomBrand.png";

const Homepage: NextPage = () => {
  const [open, setOpen] = useState(true);

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
      <div className="flex w-full justify-between px-12 py-8">
        <div className="">
          <Image
            alt="Land of Mush Icon"
            src={lomBrand}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>icons</div>
      </div>
    </div>
  );
};

export default Homepage;
