import React from "react";
import { Canvas } from "@react-three/fiber";
import Footer from "../footer";
import Header from "../header";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <>
      <Header home={home}/>
      {home ? (
        <>{children}</>
      ) : (
        <div style={{ display: "flex", marginTop: "60px" }}>{children}</div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
