import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Header from "../header";
import Footer from "../footer";
import { useMobileView } from "../../utils/hooks/useMobileView";
interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  const isMobileView = useMobileView();

  return (
    <>
      <Header home={home} mobile={isMobileView}/>
      {home ? (
        <>{children}</>
      ) : (
        <div style={{ marginTop: "60px" }}>{children}</div>
      )}
      {!isMobileView && <Footer />}
    </>
  );
};

export default Layout;
