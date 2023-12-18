import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Background from "./background";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="h-screen flex flex-col "
      style={{
        backgroundImage: "",
      }}
    >
      {<Background />}
      <Navbar />
      <main className="h-full ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
