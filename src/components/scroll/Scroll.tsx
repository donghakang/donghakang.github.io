import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const Scroll: React.FC<{ showBelow: number }> = ({ showBelow }) => {
  const [show, setShow] = useState<boolean>(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <div
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "10%",
            right: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            width: "50px",
            height: "50px",
            backgroundColor: "lightgreen",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};
