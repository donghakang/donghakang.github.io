import React from "react";
import { Canvas } from "@react-three/fiber";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <>
    
      <Header home={home} />
      {home ? (
        <>{children}</>
      ) : (
        <div style={{ marginTop: "60px" }}>{children}</div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
