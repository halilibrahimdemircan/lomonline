import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Background from "./background";
import { useRouter } from "next/router";
import background from "../public/background.png";
import closedBetaBg from "../public/closedBetaBg.png";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className="h-screen flex flex-col ">
      {
        <Background
          src={currentPath == "/landofmush" ? closedBetaBg : background}
        />
      }
      <Navbar />
      <main className="h-full ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
