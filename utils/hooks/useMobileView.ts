// returns whether it is mobile view or not.

import { useEffect, useState } from "react";

// 768px will be considered as mobile view.
export const useMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileView;
};
