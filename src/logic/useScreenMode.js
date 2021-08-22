import React, { useState, useEffect } from "react";

const useScreenMode = () => {
  const xsSize = 768;
  const [screen, setScreen] = useState(window.innerWidth > 768 ? true : false); // false

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > xsSize) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screen;
};

export default useScreenMode;
